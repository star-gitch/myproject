import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory, Link } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ImageUploading from "react-images-uploading";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EditIcon from "@mui/icons-material/Edit";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { useToasts } from "react-toast-notifications";
import Axios from "axios";
import "./index.scss";

export default function Builder() {
  const history = useHistory();
  const [value, setValue] = useState({
    title: "",
    description: "",
    user_id: "",
  });
  const [images, setImages] = useState([]);
  const [uploadImage, setUploadImage] = useState({
    id: "",
    url: "",
  });
  const { addToast } = useToasts();
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  useEffect(() => {
    let token = localStorage.getItem("auth-token");

    try {
      let userInfo = jwt_decode(token);
      value["user_id"] = userInfo["id"];
    } catch (error) {
      history.push("/");
      return;
    }
  }, []);

  const logout = () => {
    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  const upload = () => {
    // Check if image is selected.
    if (!images.length) {
      addToast("Sorry, please select image", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    // If image is selected, upload execute.

    const formData = new FormData();
    formData.append("imgg", images[0]["file"]);
    formData.append("title", value["title"]);
    formData.append("description", value["description"]);
    formData.append("userId", value["user_id"]);

    Axios.post("/image/upload", formData, {}).then((res) => {
      if (res.data.status === 200) {
        setUploadImage({
          ...uploadImage,
          ["id"]: res.data.id,
          ["url"]: res.data.url,
        });
      }
    });
  };
  return (
    <div className="builder">
      <div className="navbar">
        <LogoutIcon onClick={logout} />
      </div>
      <div className="upload">
        <ValidatorForm onSubmit={() => upload()}>
          <TextValidator
            key={1}
            label="Title"
            variant="outlined"
            autoFocus
            validators={["required"]}
            errorMessages={["Please enter title"]}
            onChange={(e) => setValue({ ...value, ["title"]: e.target.value })}
            value={value["title"]}
          />
          <TextValidator
            key={2}
            label="Description"
            variant="outlined"
            autoComplete="off"
            validators={["required"]}
            errorMessages={["Please enter description"]}
            multiline
            rows={4}
            onChange={(e) =>
              setValue({ ...value, ["description"]: e.target.value })
            }
            value={value["description"]}
          />
          <div className="image-upload">
            <ImageUploading
              value={images}
              onChange={onChange}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <Button
                    variant="contained"
                    startIcon={<InsertPhotoIcon />}
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Select Image
                  </Button>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img
                        src={image["data_url"]}
                        alt=""
                        width="100"
                        style={{
                          width: "auto",
                          height: "auto",
                          maxWidth: "150px",
                          padding: "10px",
                        }}
                      />
                      <div className="image-item__btn-wrapper">
                        <Button
                          variant="contained"
                          startIcon={<EditIcon />}
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
          <Button
            variant="contained"
            startIcon={<CloudUploadIcon />}
            className="btn-save"
            type="submit"
          >
            Save
          </Button>
        </ValidatorForm>
        {uploadImage["id"] ? (
          <>
            <p style={{ paddingTop: "40px" }}>Uploaded Image Url:</p>
            <Link to={`/detail/${uploadImage["id"]}`} target="_blank">
              {uploadImage["url"]}
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
