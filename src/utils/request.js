import axios from "axios";
import { BASE_API } from "@config";

const instance = axios.create({
  // baseURL: "http://api.shanghaim.net/mock/28/api/",
  baseURL: BASE_API,
  timeout: 100000
  // headers: { "X-Custom-Header": "foobar" }
});

const request = async ({
  url,
  method = "get",
  data = {}
  // headers = { "Content-Type": "application/json" },
  // loading = false,
  // timeout = 30000
}) => {
  const response = await instance({
    url,
    method,
    data
  });

  const responseData = { ...response.data };
  if (+responseData.code === 0) {
    responseData.state = true;
  } else {
    alert(responseData.error);
  }
  return responseData;
};

function get(url) {
  return request({ url });
}

export default { request, get };
