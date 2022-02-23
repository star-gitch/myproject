import React, { useState, useEffect } from "react";
import Axios from "axios";
import { saveAs } from "file-saver";
import "./App.css";

export default function App() {
    const [csv, setCsv] = useState("");
    const [jsonUrl, setJsonUrl] = useState("");
    const submit = () => {
        const formData = new FormData();
        formData.append("csv", csv[0]);
        Axios.post("/csv/upload", formData).then((res) => {
            setJsonUrl(res["data"]["url"]);
        });
    };

    const saveFile = () => {
        saveAs(jsonUrl, "temp.json");
    };
    return (
        <div className="App">
            <div>
                <input type="file" onChange={(e) => setCsv(e.target.files)} />
                <button type="button" class="btn btn-primary" onClick={submit}>
                    OK
                </button>
            </div>
            {jsonUrl ? (
                <div>
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={saveFile}
                    >
                        <i class="fas fa-download"></i>&nbsp;download
                    </button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
