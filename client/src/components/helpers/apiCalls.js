import axios from "axios";

export const sendMail = async (values) => {
  return new Promise((resolve, reject) => {
    console.log(values);
    let data = JSON.stringify(values);
    var config = {
      method: "post",
      url: `http://localhost:8080/api/randomApis`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config).then(function (response) {
      if (response.data.success === true) {
        resolve(response.data);
      } else {
        resolve([]);
      }
    });
  });
};
