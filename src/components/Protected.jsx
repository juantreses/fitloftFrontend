import React from "react";
import { useDispatch } from "react-redux";
import { signOutAction } from "../data/auth";
import { useHistory } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutClickHandler = () => {
    dispatch(signOutAction(history));
  };
  return (
    <>
      "this page is protected"
      <button onClick={logoutClickHandler}>logout</button>
    </>
  );
};
