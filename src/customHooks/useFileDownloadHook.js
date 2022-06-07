import {useMutation, useQueryClient} from 'react-query';
import {useFileDownloadApiData} from "../helpers/AxiosInstance";
import useErrorMsg from "./useErrorMsg";
import useSuccessMsg from "./useSuccessMsg";
import {useState} from "react";

const useFileDownloadHook = ({queryKey}) => {
   
   const [successMsg, setSuccessMsg] = useSuccessMsg();
   const [errorMsg, setErrorMsg] = useErrorMsg();
   const [addSuccessSnackBar, setAddSuccessSnackBar] = useState(false);
   const [errorSnackBar, setErrorSnackBar,] = useState(false);
   
   //  Getting cached data from queryClient
   const queryClient = useQueryClient();
   
   const {
      isLoading: isPostLoading,
      mutate,
      isSuccess: isPostSuccess,
      data: postData,
      isError: isPostError
   } = useMutation(useFileDownloadApiData, {
      onSuccess: data => {
         if (data.status === 201 || data.status === 200) {
            setAddSuccessSnackBar(true);
            // setOpenAddPopup(false);
            setSuccessMsg(data);
         }
      },
      onError: error => {
         setErrorSnackBar(true)
      },
      
      onSettled: () => {
         queryClient.invalidateQueries(queryKey)
      }
      
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
      setErrorSnackBar
   }
};

export default useFileDownloadHook;