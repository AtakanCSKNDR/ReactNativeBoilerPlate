import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

client.interceptors.request.use(
  async (config: any) => {
    let token = "MySecretBearerRToken";
    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
client.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: any) => {
    return Promise.reject(error);
  }
);

export const request = (options: any) => {
    const onSuccess = (response: any) => {
      return response.data;
    };
    const onError = (error: any) => {
      if (error.response) {
        console.error('Status', error.response.status);
        console.error('Data', error.response.data);
        console.error('Headers', error.response.headers);
      } else {
        console.error('Error Message ', error.message);
      }
  
      return Promise.reject(error.response || error.reject);
    };
  
    return client(options).then(onSuccess).catch(onError);
  };
  