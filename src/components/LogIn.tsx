import React, { useState, useEffect } from "react";
import axios from "axios";

import { authenticate, fetchUsers } from "../redux/reducers/users";
import { useAppDispatch } from "../hooks/reactHooks";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(fetchUsers());
    if (token) {
      dispatch(authenticate(token));
    }
  }, []);
  const createAndLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email, password, name, avatar }
      );
      const token = response.data;
      localStorage.setItem("token", token.access_token);
      dispatch(authenticate(token.access_token));
    } catch (e) {
      console.log(e);
    }
  };

  return <div>LogIn</div>;
};

export default LogIn;
