import React from "react";
import { Link, useHistory } from "react-router-dom";

import {
  Typography,
  TextField,
  Button,
  makeStyles,
  Grid,
} from "@material-ui/core";

import { useField } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../data/auth";

export default () => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const emailField = useField("");
  const passField = useField("");
  const {
    typographyStyle,
    buttonStyle,
    inputStyle,
    linkStyle,
    errorStyle,
  } = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signInAction(emailField.value, passField.value, history));
  };

  return (
    <>
      <Grid container direction="row">
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Typography variant="h4" className={typographyStyle}>
            Aanmelden
          </Typography>
          <form onSubmit={submitHandler}>
            <TextField
              label="Email"
              placeholder="Email adres"
              className={inputStyle}
              {...emailField}
            />
            <TextField
              label="Paswoord"
              placeholder="Paswoord"
              type="password"
              className={inputStyle}
              {...passField}
            />
            <Button
              fullWidth={true}
              color="primary"
              variant="contained"
              className={buttonStyle}
              onClick={submitHandler}
            >
              Aanmelden
            </Button>
          </form>
          {error && <Typography className={errorStyle}>{error}</Typography>}
          <Typography>
            Nog geen account?{" "}
            <Link to={"/signup"} className={linkStyle}>
              Registreer hier
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </>
  );
};

const useStyles = makeStyles({
  typographyStyle: {
    marginTop: "2em",
  },
  buttonStyle: {
    marginTop: "2em",
    color: "white",
    fontWeight: "bold",
  },
  inputStyle: {
    marginTop: "2em",
  },
  linkStyle: {
    color: "#69c100",
  },
  errorStyle: {
    color: "red",
  },
});
