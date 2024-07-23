import axios, {Axios, InternalAxiosRequestConfig, AxiosResponse} from 'axios';

import { REACT_APP_API_URL } from "@env"
import { getToken, LogOff } from '../auth';

const HttpClient : Axios = axios.create({
  baseURL: REACT_APP_API_URL,
});

HttpClient.interceptors.request.use(async (request : InternalAxiosRequestConfig) => {
  const token = await getToken();

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  };

  return request;
});

HttpClient.interceptors.response.use((response : AxiosResponse) => response, (error) => {
    if (error.response?.status === 500) {
      console.error(error.response.data, '500')
    }
    else if (error.response?.status === 503) {
      console.error(error.response.data, '503')
    }
    else if (error.response?.status === 400) {
      console.error(error.response.data, '400')
    }
    else if (error.response?.status === 404) {
      console.error(error.response.data, '404')
    }
    else if (error.response?.status === 401) {
      LogOff();
    }

    return Promise.reject(error);
  });

export default HttpClient;