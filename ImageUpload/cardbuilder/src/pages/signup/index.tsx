import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Axios from "axios";
import "./index.scss";

export default function Signup() {
  const [value, setValue] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errPass, setErrPass] = useState(false);
  const history = useHistory();
  const { addToast } = useToasts();

  useEffect(() => {
    if (value["password"] == value["repeatPassword"]) {
      setErrPass(false);
    } else {
      setErrPass(true);
    }
  }, [value["repeatPassword"]]);

  // Send User Info to Database.
  const sign = async () => {
    // Check if password is matched.
    if (errPass) {
      return;
    }

    const result = await Axios.post("/users/register", value);

    // Register Success Case
    if (result.data.status === 200) {
      // Generating Token
      const loginRes = await Axios.post("/users/login", value);
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/builder");
    } else {
      addToast(result.data.msg, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  return (
    <Grid className="signup" item xs={12} sm={12} md={3}>
      <Typography mb={3} className="p-welcome">
        Welcome Signup
      </Typography>
      <ValidatorForm onSubmit={() => sign()}>
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
          key={4}
          label="password"
          variant="outlined"
          autoComplete="off"
          type="password"
          validators={["required"]}
          errorMessages={["Please enter password"]}
          onChange={(e) => setValue({ ...value, ["password"]: e.target.value })}
          value={value["password"]}
        />
        <TextValidator
          key={5}
          label="Repeat password"
          variant="outlined"
          autoComplete="off"
          type="password"
          validators={["required"]}
          errorMessages={["this field is required"]}
          onChange={(e) =>
            setValue({ ...value, ["repeatPassword"]: e.target.value })
          }
          value={value["repeatPassword"]}
          name="repeatPassword"
          className="repass"
        />
        {errPass ? <p className="p-err">password mismatch</p> : <></>}

        <Button variant="outlined" className="btn-signup" type="submit">
          Sign Up
        </Button>
      </ValidatorForm>
      <Grid container alignItems="center" justifyContent="center">
        <Typography>Already an account?</Typography>
        <Link to="/">Login</Link>
      </Grid>
    </Grid>
  );
}
