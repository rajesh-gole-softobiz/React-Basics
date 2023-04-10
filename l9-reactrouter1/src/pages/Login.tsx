import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UserAuthHOC from "../components/UserAuthHOC";
import { AppDispatch } from "../redux/configureStore";
import { setUser } from "../redux/modules/auth";
const inputStyle = {
  padding: "5px",
  borderRadius: "4px",
  width: "calc(100% - 10px)",
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: any = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    if (email.trim() === "" || password.trim() === "") {
      return false;
    }
    dispatch(
      setUser({
        email,
      })
    );
  };
  return (
    <UserAuthHOC>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "300px",
            textAlign: "center",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={inputStyle}
            required
          />
          <br />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={inputStyle}
            required
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </UserAuthHOC>
  );
};

export default Login;
