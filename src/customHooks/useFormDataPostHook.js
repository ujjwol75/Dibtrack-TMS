import React, { useState } from "react";
import useSuccessMsg from "./useSuccessMsg";
import useErrorMsg from "./useErrorMsg";
import { useMutation, useQueryClient } from "react-query";
import { postApiFormData } from "../helpers/AxiosInstance";

const useFormDataPostHook = ({ queryKey, setOpenAddPopup }) => {
  const [successMsg, setSuccessMsg] = useSuccessMsg();
  const [errorMsg, setErrorMsg] = useErrorMsg();
  const [addSuccessSnackBar, setAddSuccessSnackBar] = useState(false);
  const [errorSnackBar, setErrorSnackBar] = useState(false);
  // const [useUploadFiles, setUseUploadFiles] = useState([])
  // const [uploadFileProgress, setUploadFileProgress] = useState(false)

  //  Getting cached data from queryClient
  const queryClient = useQueryClient();

  const {
    isLoading: isPostLoading,
    mutate,
    isSuccess: isPostSuccess,
    data: postData,
    isError: isPostError,
  } = useMutation(postApiFormData, {
    onSuccess: data => {
      if (data.status === 201 || data.status === 200) {
        setAddSuccessSnackBar(true);
        setSuccessMsg(data);
      }
      if (data.status === 400) {
        setErrorSnackBar(true)
        setErrorMsg(data?.data)
      }
    },
    onError: (error) => {
      setErrorSnackBar(true);
    },

    onSettled: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
  return {
    isPostLoading,
    mutate,
    isPostSuccess,
    postData,
    isPostError,
    successMsg,
    errorMsg,
    addSuccessSnackBar,
    setAddSuccessSnackBar,
    errorSnackBar,
    setErrorSnackBar,
  };
};

export default useFormDataPostHook;
