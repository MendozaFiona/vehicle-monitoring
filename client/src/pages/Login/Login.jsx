import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../reducer/user/userSlice";
import { toast } from "react-toastify";
import {
  StyledPageContent,
  StyledSideContent,
  StyledCard,
  StyledForm,
  StyledCardHeading,
  StyledCardContent,
} from "../../components/styled";
import { StyledSideGrid } from "../../components/styled";
import Spinner from "../../components/Spinner";

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
    return <Spinner />;
  }

  return (
    <StyledSideGrid className="grid">
      <StyledSideContent>
        <img src="/assets/images/login-image.png" alt="login" />
      </StyledSideContent>
      <StyledPageContent className="fm-content">
        <StyledCard>
          <StyledCardHeading>LOG IN</StyledCardHeading>
          <StyledCardContent>
            <StyledForm>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                  Email
                  <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
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
                    autoComplete="off"
                    required
                    onChange={handleChange}
                  />
                </label>

                <button type="submit">Login</button>
              </form>
            </StyledForm>
          </StyledCardContent>
        </StyledCard>
      </StyledPageContent>
    </StyledSideGrid>
  );
};

export default Login;
