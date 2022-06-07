import { useMutation, useQueryClient } from "react-query";
import { postApiData } from "../helpers/AxiosInstance";
import useErrorMsg from "./useErrorMsg";
import useSuccessMsg from "./useSuccessMsg";
import { useState } from "react";

const usePostHook = ({ setOpenAddPopup, queryKey }) => {
  const [successMsg, setSuccessMsg] = useSuccessMsg();
  const [errorMsg, setErrorMsg] = useErrorMsg();
  const [addSuccessSnackBar, setAddSuccessSnackBar] = useState(false);
  const [errorSnackBar, setErrorSnackBar] = useState(false);

  //  Getting cached data from queryClient
  const queryClient = useQueryClient();

  const {
    isLoading: isPostLoading,
    mutate,
    isSuccess: isPostSuccess,
    data: postData,
    isError: isPostError,
  } = useMutation(postApiData, {
    onSuccess: (data) => {
      if (data.status === 201 || data.status === 200) {
        setAddSuccessSnackBar(true);
        setOpenAddPopup && setOpenAddPopup(false);
        setSuccessMsg(data);
      }
    },
    onError: (error) => {
      setErrorMsg(error);
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

export default usePostHook;
