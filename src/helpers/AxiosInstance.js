import Axios from "axios";
import { accessToken } from "./sessionKey";

const DOMAIN = "https://dibtrack.dibtech.com.au";
const HOSTNAME = window.location.hostname === "localhost" ? DOMAIN : "";
const API_ROOT = `${HOSTNAME}/api`;

//create axios instance
export const instance = Axios.create({
  baseURL: `${API_ROOT}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// create axios instance for form data to upload file
export const formDataInstance = Axios.create({
  baseURL: `${API_ROOT}`,
  headers: {
    "Content-Type": `multipart/form-data`,
  },
});

// create form data to upload files
export const postApiFormData = async (fileData) => {
  const { url, formData, requestMethod, formikProps } = fileData;
  let response;
  try {
    response = await formDataInstance({
      // method: "POST",
      method: `${requestMethod}`,
      url: `${url}`,
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
      data: formData,
      transformResponse: [
        function (responseData) {
          //Do what ever you want transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e) {
    console.log(e.response);
    formikProps.setErrors(e.response.data);
    return e.response;
  }
  return response;
};

//get data from api
export const getApiData = async (url, param = null) => {
  let response;
  try {
    response = await instance({
      method: "GET",
      url: `${url}`,
      params: param,
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
      transformResponse: [
        function (responseData) {
          // Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e) {
    return e.response;
  }
  return response;
};

//post data to api
export const postApiData = async (data) => {
  const { url, formData, formikProps } = data;
  let response;
  try {
    response = await instance({
      method: "POST",
      url: `${url}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
      transformResponse: [
        function (responseData) {
          //Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e) {
    formikProps.setErrors(e.response.data);
    return e.response;
  }
  return response;
};

//post data to api
export const postApiDataNoAuth = async (data) => {
  const { url, formData } = data;
  let response;
  try {
    response = await instance({
      method: "POST",
      url: `${url}`,
      data: formData,
      headers: {
        // Authorization: `Bearer ${accessToken()}`,
      },
      transformResponse: [
        function (responseData) {
          //Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e) {
    return e.response;
  }
  return response;
};

//update data
export const putApiData = async (data) => {
  const { url, formData, formikProps } = data;
  let response;
  try {
    response = await instance({
      method: "PUT",
      url: `${url}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
      transformResponse: [
        function (responseData) {
          //Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e) {
    formikProps.setErrors(e.response.data);
    return e.response;
  }
  return response;
};

//delete data
export const deleteApiData = async (url) => {
  let response;
  response = await instance({
    method: "DELETE",
    url: url,
    // params: param,
    headers: {
      Authorization: `Bearer ${accessToken()}`,
    },
  });
  return response;
};

//delete bulk data
export const bulkDeleteApiData = async (data) => {
  const { url, formData } = data;
  let response;
  response = await instance({
    method: "DELETE",
    url: `${url}`,
    data: formData,
    // params: param,
    headers: {
      Authorization: `Bearer ${accessToken()}`,
    },
  });
  return response;
};

//update data
export const patchApiData = async (data) => {
  const { url, formData } = data;
  let response;
  try {
    response = await instance({
      method: "PATCH",
      url: `${url}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
      transformResponse: [
        function (responseData) {
          //Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e) {
    // formikProps.setErrors(e.response.data);
    return e.response;
  }
  return response;
};

export const downloadApiData = async (url, fileName) => {
  let response;
  try {
    response = await instance({
      method: "POST",
      url: url,
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
  return response;
};

export const downloadApiDataGET = async (url, fileName) => {
  let response;
  try {
    response = await instance({
      method: "GET",
      url: url,
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName || "sample_student.xlsx";
      link.click();
    });
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
  return response;
};
export const useFileDownloadApiData = async (data) => {
  const { url, formData, formikProps } = data;
  let response;
  try {
    response = await Axios.create({
      method: "POST",
      url: `${url}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${accessToken()}`,
        // "Content-Type": "application/x-zip-compressed",
        "Content-Type": `multipart/form-data`,
      },
      transformResponse: [
        function (responseData) {
          //Do whatever you want to transform the data
          return JSON.parse(responseData);
        },
      ],
    });
  } catch (e) {
    formikProps.setErrors(e.response.data);
    return e.response;
  }
  return response;
};

export const downloadFile = async (url, fileName, formData, formikProps) => {
  let response;
  try {
    response = await instance({
      method: "POST",
      url: url,
      data: formData,
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${accessToken()}`,
      },
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  } catch (error) {
    formikProps.setErrors(error.response.data);
    console.log(error.response.data);
    return error.response;
  }
  return response;
};

export { API_ROOT };
