import React, { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/authSlice";
import "../../axios/global";

const Login = (props) => {
  const dispatch = useDispatch();
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  // test auth: qwert = zap, asdf = adm
  async function sendLoginData(event) {
    event.preventDefault();
    // const response = await axios.post("/login", {
    //   username: usernameRef.current.value,
    //   password: passwordRef.current.value,
    // });
    const loginData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    // const data = await response.json();
    // console.log(data);

    const response = await fetch("https://localhost:44383/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch(
      setCredentials({
        user: usernameRef.current.value,
        accessToken: data.token,
      })
    );
  }

  const fakeLogin = (event) => {
    event.preventDefault();

    // could add validation here...
    dispatch(
      setCredentials({
        user: usernameRef.current.value,
        accessToken: passwordRef.current.value,
      })
    );
  };

  return (
    <Fragment>
      <form onSubmit={sendLoginData}>
        <label htmlFor="username">Username:</label>
        <input name="username" id="username" type="text" ref={usernameRef} />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          id="password"
          type="password"
          ref={passwordRef}
        />
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default Login;
