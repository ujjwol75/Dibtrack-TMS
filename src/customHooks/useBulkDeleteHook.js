import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import useSuccessMsg from "./useSuccessMsg";
import useErrorMsg from "./useErrorMsg";
import { bulkDeleteApiData, deleteApiData } from "../helpers/AxiosInstance";

const useBulkDeleteHook = ({ queryKey }) => {
  //  Getting cached data from queryClient
  const queryClient = useQueryClient();

  const [successMsg, setSuccessMsg] = useSuccessMsg();
  const [errorMsg, setErrorMsg] = useErrorMsg();
  const [removeSuccessSnackBar, setRemoveSuccessSnackBar] = useState(false);
  const [errorSnackBar, setErrorSnackBar] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" });

  const { isLoading, mutate, isSuccess, data, isError } = useMutation(bulkDeleteApiData, {
    onSuccess: (data) => {
      if (data.status === 200) {
        setSuccessMsg(data.data.success[0]);
        setErrorMsg(data.data.failed[0]);
        setConfirmDialog({
          ...confirmDialog,
          isOpen: false,
        });
        setRemoveSuccessSnackBar(true);
      }
    },
    onError: (error) => {
      setErrorSnackBar(true);
      setErrorMsg(error.response?.data.detail);
    },
    onSettled: () => {
      //  When the mutation succeeds, invalidate or re-render queries with provided queryKey
      //  (or re-render particular component)
      queryClient.invalidateQueries(queryKey);
    },
  });
  return {
    isLoading,
    mutate,
    isSuccess,
    data,
    isError,
    setRemoveSuccessSnackBar,
    removeSuccessSnackBar,
    errorSnackBar,
    setErrorSnackBar,
    confirmDialog,
    setConfirmDialog,
    errorMsg,
    successMsg,
  };
};

export default useBulkDeleteHook;
