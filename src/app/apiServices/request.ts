import axios from "axios";

export const getData = async (endpoint: string) => {
  try {
    const response = await axios.get(endpoint);
    return { data: response?.data?.results };
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error(error?.response?.data?.message);
      throw error?.response?.data?.message || error.message;

      // You can log specific error messages or handle them in a user-friendly way
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error?.request?.message);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error setting up the request:", error.message);
    }
  }
};
