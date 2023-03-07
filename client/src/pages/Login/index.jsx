import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import {
  StyledPageContent,
  StyledCard,
  StyledForm,
  StyledCardContent,
} from "../../components/ReusableStyles/styled";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!isLoading && (isSuccess || user)) {
      navigate("/vehicle");
    }
    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    // fgx modify
    return <div aria-busy="true"></div>;
  }

  return (
    <StyledPageContent>
      <StyledCard>
        <StyledCardContent>
          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                aria-label="Email"
                autoComplete="on"
                required
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                aria-label="Password"
                autoComplete="off"
                required
                onChange={handleChange}
              />
            </label>

            <button type="submit">Login</button>
          </StyledForm>
        </StyledCardContent>
      </StyledCard>
    </StyledPageContent>
  );
};

export default Login;
