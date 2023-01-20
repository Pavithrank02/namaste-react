import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";


import {useFormik} from "formik";

const LoginPage = () => {
  const formik = useFormik({
      initialValues: {
          email: '',
          password: ''
      },
      onSubmit: () => {
          window.location.href = "http://localhost:1234/home"
      },
  });

  return (
    <Grid
      container
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
      xs={4}
    >
      <Typography variant="h4" marginTop={2} sx={{ fontWeight: "Bold" }}>
        Login
      </Typography>
      <Typography variant="p" marginTop={1}>
        Add Your Credentials Below..
      </Typography>
      <IconButton className="icon">
        <AccountCircleIcon sx={{ fontSize: 70, color: "#1957DD" }} />
      </IconButton>
      <form className="form-item">
        <TextField
          margin="none"
          color="primary"
          id="outlined-multiline-flexible"
          label="Username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          margin="normal"
          id="outlined-multiline-flexible"
          label="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Button
          variant="contained"
          size="medium"
          type="submit"
          marginTop={4}
        >
          Login
        </Button>

        <Typography
          variant="p"
          sx={{ fontWeight: "medium", textAlign: "center" }}
          mt={2}
        >
          If you are new,{" "}
          <Button
            justifyContent="center"
            alignItems="center"
          >
            SignUp{" "}
          </Button>
        </Typography>
      </form>
      <p>------or Signin Through------</p>
      <div className="log">
        <GoogleIcon sx={{ color: "red" }} />
        <FacebookIcon sx={{ color: "blue" }} />
        <TwitterIcon sx={{ color: "#19A2DD" }} />
      </div>
    </Grid>
  )
}

export default LoginPage