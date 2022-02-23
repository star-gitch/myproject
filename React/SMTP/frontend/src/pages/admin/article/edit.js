import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useHistory, useParams } from "react-router-dom";

export default function EditArticle() {
  let { id } = useParams();
  const history = useHistory();
  const [blogInfo, setBlogInfo] = useState({
    title: "",
    ref_url: "",
    img_url: "",
    content: "",
  });
  useEffect(() => {
    Axios.get("/blog/edit/" + id).then(async (response) => {
      setBlogInfo({ ...response.data[0], ["img_url"]: "" });
    });
  }, []);

  const submit = () => {
    // When not selecting new image.
    if (!blogInfo["img_url"]) {
      var updatedBlog = {
        title: blogInfo["title"],
        ref_url: blogInfo["ref_url"],
        content: blogInfo["content"],
        id: id,
      };
      Axios.put("/blog/update_noimg/", updatedBlog, {}).then((res) => {
        if (res.data.status === 200) {
          history.push("/admin/blog");
        }
      });
    } else {
      const formData = new FormData();
      formData.append("img", blogInfo["img_url"][0]);
      formData.append("title", blogInfo["title"]);
      formData.append("ref_url", blogInfo["ref_url"]);
      formData.append("content", blogInfo["content"]);
      formData.append("id", id);

      Axios.put("/blog/update/", formData, {}).then((res) => {
        if (res.data.status === 200) {
          history.push("/admin/blog");
        }
      });
    }
  };
  return (
    <Grid
      container
      className="p-article"
      direction="column"
      sx={{ width: "60%", margin: "auto" }}
    >
      <TextField
        key={1}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Title"
        autoFocus
        value={blogInfo["title"]}
        onChange={(e) =>
          setBlogInfo({ ...blogInfo, ["title"]: e.target.value })
        }
      />
      <TextField
        key={2}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Referrence Url"
        autoFocus
        value={blogInfo["ref_url"]}
        onChange={(e) =>
          setBlogInfo({ ...blogInfo, ["ref_url"]: e.target.value })
        }
      />
      <Grid container alignItems="center" sx={{ padding: "20px 0px" }}>
        <label for="myimg">Select a image:</label>
        <input
          type="file"
          id="myimg"
          name="myimg"
          accept=".png, .jpg, .jpeg"
          onChange={(e) =>
            setBlogInfo({ ...blogInfo, ["img_url"]: e.target.files })
          }
        />
        {/* <img
          src={blogInfo["img_url"]}
          style={{ width: "auto", height: "auto", maxWidth: "100px" }}
        /> */}
      </Grid>
      <CKEditor
        editor={ClassicEditor}
        data={blogInfo["content"]}
        // config={{
        //   extraPlugins: [uploadPlugin],
        // }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      <Button
        variant="contained"
        startIcon={<SaveIcon />}
        className="btn-new"
        sx={{ width: "30%", margin: "20px auto" }}
        onClick={submit}
      >
        Save
      </Button>
    </Grid>
  );
}
