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
import { signUpAction } from "../data/auth";

export default () => {
  const history = useHistory();
  const emailField = useField("");
  const passField = useField("");
  const voornaamField = useField("");
  const achternaamField = useField("");
  const { typographyStyle, buttonStyle, inputStyle, linkStyle } = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();
    signUpAction(
      emailField.value,
      passField.value,
      voornaamField.value,
      achternaamField.value,
      history
    );
  };

  return (
    <>
      <Grid container direction="row">
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Typography variant="h4" className={typographyStyle}>
            Registreren
          </Typography>
          <form onSubmit={submitHandler}>
            <TextField
              label="Voornaam"
              placeholder="Voornaam"
              className={inputStyle}
              {...voornaamField}
            />
            <TextField
              label="Achternaam"
              placeholder="Achternaam"
              className={inputStyle}
              {...achternaamField}
            />
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
              Registreren
            </Button>
          </form>
          <Typography>
            Heb je al een account?{" "}
            <Link to={"/"} className={linkStyle}>
              Log in
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
});
