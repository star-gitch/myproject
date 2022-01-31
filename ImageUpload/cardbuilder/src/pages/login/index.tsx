import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useToasts } from "react-toast-notifications";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./index.scss";

export default function Login() {
  const history = useHistory();
  const { addToast } = useToasts();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const login = async () => {
    const loginRes = await Axios.post("/users/login", value);

    if (loginRes.data.status === "No User") {
      addToast(loginRes.data.msg, {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    if (loginRes.data.status === "Wrong Password") {
      addToast(loginRes.data.msg, {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    // If login is success.
    if (loginRes.data.status === "Success") {
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/builder");
    }
  };
  return (
    <Grid className="login" item xs={12} sm={12} md={3}>
      <Typography mb={3} className="p-welcome">
        Welcome Login
      </Typography>
      <ValidatorForm onSubmit={() => login()}>
        <TextValidator
          key={1}
          label="Email"
          variant="outlined"
          autoFocus
          validators={["required", "isEmail"]}
          errorMessages={["Please enter email", "Wrong Email Format"]}
          onChange={(e) => setValue({ ...value, ["email"]: e.target.value })}
          value={value["email"]}
        />

        <TextValidator
          key={2}
          label="Password"
          variant="outlined"
          type="password"
          autoFocus
          autoComplete="off"
          validators={["required"]}
          errorMessages={["Please enter password"]}
          onChange={(e) => setValue({ ...value, ["password"]: e.target.value })}
          value={value["password"]}
        />

        <Button variant="outlined" className="btn-login" type="submit">
          Login
        </Button>
      </ValidatorForm>
      <Grid container alignItems="center" justifyContent="center">
        <Typography>Need an account?</Typography>
        <Link to="signup">Sign Up</Link>
      </Grid>
    </Grid>
  );
}
