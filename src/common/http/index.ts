import axios from "axios";

export const http = axios.create({
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

http.interceptors.request.use(
  (req) => {
    // @ts-ignore
    req.headers.authorization = "" + sessionStorage.getItem("ACCESS_TOKEN");
    return req;
  },
  (err) => {
    // err.message
    throw err;
  }
);

http.interceptors.response.use(
  (res) => {
    // const { code } = res.data;

    // if (code&&code !== 200) {
    //   message.error(res.data.message);
    //   throw res;
    // }
    return res.data;
  },
  (err) => {
    console.error(err);
    throw err;
  }
);
