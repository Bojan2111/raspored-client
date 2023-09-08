import React, { Fragment, useRef } from "react";

const Login = (props) => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const loginData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    props.onLoginSubmit(loginData);
  }

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
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
