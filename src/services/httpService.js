import axios from "axios";
import { redirect } from "next/navigation";
const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
app.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("access_token");
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
  return config;
});
app.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403) {
      redirect("/login");
    }
    return Promise.reject(error);
  }
);
app.interceptors.response.use;
const api = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};
export default api;
