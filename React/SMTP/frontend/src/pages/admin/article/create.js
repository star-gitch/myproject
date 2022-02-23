import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";

export default function CreateArticle() {
  const [blogInfo, setBlogInfo] = useState({
    title: "",
    refUrl: "",
    img: "",
    content: "",
  });
  const { addToast } = useToasts();
  const history = useHistory();

  // function uploadAdapter(loader) {
  //   return {
  //     upload: () => {
  //       return new Promise((resolve, reject) => {
  //         console.log("loader=", loader);
  //         const body = new FormData();
  //         loader.file.then((file) => {
  //           body.append("imagesArray", file);

  //           Axios.post("/blog/imgupload", body, {}).then(
  //             (res) => {
  //               console.log("uploadImg=", res.data);
  //             }
  //           );
  //         });
  //       });
  //     },
  //   };
  // }

  // function uploadPlugin(editor) {
  //   editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
  //     console.log("kkk=", editor);
  //     return uploadAdapter(loader);
  //   };
  // }

  const submit = () => {
    if (!blogInfo["title"]) {
      addToast("Sorry, please enter title.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (!blogInfo["refUrl"]) {
      addToast("Sorry, please enter referrence url.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (!blogInfo["img"]) {
      addToast("Sorry, please choose image.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (!blogInfo["content"]) {
      addToast("Sorry, please enter content.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    console.log('QQ=', blogInfo["img"][0]);
    // Once all field is filled.
    const formData = new FormData();
    formData.append("img", blogInfo["img"][0]);
    formData.append("title", blogInfo["title"]);
    formData.append("ref_url", blogInfo["refUrl"]);
    formData.append("content", blogInfo["content"]);

    Axios.post("/blog/create", formData, {}).then((res) => {
      if (res.data.status === 200) {
        history.push("/admin/blog");
      }
    });
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
        value={blogInfo["refUrl"]}
        onChange={(e) =>
          setBlogInfo({ ...blogInfo, ["refUrl"]: e.target.value })
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
            setBlogInfo({ ...blogInfo, ["img"]: e.target.files })
          }
        />
      </Grid>
      <CKEditor
        editor={ClassicEditor}
        data=""
        // config={{
        //   extraPlugins: [uploadPlugin],
        // }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setBlogInfo({ ...blogInfo, ["content"]: data });
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
