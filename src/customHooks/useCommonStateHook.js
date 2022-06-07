import React, { useState } from "react";

const UseCommonStateHook = (props) => {
  const [openAddPopup, setOpenAddPopup] = useState(false);
  const [openEditPopup, setOpenEditPopup] = useState(false);
  const [openSampleDownPopup, setOpenSampleDownPopup] = useState(false);
  const [addSuccessSnackBar, setAddSuccessSnackBar] = useState(false);
  const [errorSnackBar, setErrorSnackBar] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" });
  const [removeSuccessSnackBar, setRemoveSuccessSnackBar] = useState(false);
  const [updateSuccessSnackBar, setUpdateSuccessSnackBar] = useState(false);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  return {
    openAddPopup,
    setOpenAddPopup,
    openEditPopup,
    setOpenEditPopup,
    openSampleDownPopup,
    setOpenSampleDownPopup,
    addSuccessSnackBar,
    setAddSuccessSnackBar,
    errorSnackBar,
    setErrorSnackBar,
    confirmDialog,
    setConfirmDialog,
    removeSuccessSnackBar,
    setRemoveSuccessSnackBar,
    updateSuccessSnackBar,
    setUpdateSuccessSnackBar,
    limit,
    setLimit,
    offset,
    setOffset,
    searchValue,
    setSearchValue,
  };
};

export default UseCommonStateHook;
