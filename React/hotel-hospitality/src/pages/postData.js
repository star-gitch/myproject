import axios from "axios";
const access_token = localStorage.getItem("h_auth_token");
axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

const postData = (data) => {
    return new Promise(async (resolve, reject) => {
        var config = {
            method: "post",
            url: "https://hotels-api.blankbot.org/api/index.php",
            data: data,
        };

        const res = await axios(config)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

export default postData;
