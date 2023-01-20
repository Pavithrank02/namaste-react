import React from "react";

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
      <form className="login" onSubmit={formik.handleSubmit}>
          <img src alt="logo" className="logo-image"/>
          <div className="form-content">
          <label htmlFor="email">Email</label>
          <input
              id="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
          />
          <label htmlFor="password">Password</label>
          <input
              id="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
          />
          </div>
          <button type="submit" className="login-btn">Login</button>
      </form>
  )
}

export default LoginPage