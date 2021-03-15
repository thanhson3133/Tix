import axios from "axios";

const createConnector = (customConfig) => {
   const config = {};
   const token = JSON.parse(localStorage.getItem("userInfo"));

   if (token) {
      config.headers = {
         Authorization: "Bearer " + token.accessToken,
      };
   }

   return axios({ ...customConfig, ...config });
};
// const connector = createConnector();
export default createConnector;
