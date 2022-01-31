import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import "./index.scss";

export default function Detail() {
  const imageId = useParams()["id"];
  const history = useHistory();
  const [image, setImage] = useState({
    title: "",
    description: "",
    url: "",
  });

  useEffect(() => {
    Axios.get("/image/get/" + imageId).then(async (response) => {
      setImage({
        ...image,
        ["title"]: response.data[0].title,
        ["description"]: response.data[0].description,
        ["url"]: response.data[0].url,
      });
    });
  }, []);

  const prevPage = () => {
    history.goBack();
  };

  return (
    <div className="detail">
      <p className="title">{image["title"]}</p>
      <p className="des">{image["description"]}</p>
      <img src={image["url"]} alt="image" />
    </div>
  );
}
