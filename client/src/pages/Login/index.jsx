import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../reducer/user/userSlice";
import { toast } from "react-toastify";
import {
  StyledPageContent,
  StyledCard,
  StyledForm,
  StyledCardContent,
} from "../../components/styled";
import FormInput from "../../components/FormInput";
import { loginformData } from "../../utils/data";

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
            {loginformData.map((item) => (
              <FormInput key={item.name} data={item} onChange={handleChange} />
            ))}
            <button type="submit">Login</button>
          </StyledForm>
        </StyledCardContent>
      </StyledCard>
    </StyledPageContent>
  );
};

export default Login;
