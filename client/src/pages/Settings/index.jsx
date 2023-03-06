import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../../features/user/userSlice";
import {
  StyledPageContent,
  StyledCard,
  StyledCardHeading,
  StyledCardContent,
  StyledForm,
} from "../../components/ReusableStyles/styled";
import { StyledInput } from "./styled";

const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passChangeDisabled, setPassChangeDisabled] = useState(true);

  const handleLogout = async () => {
    await dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const handleChangePass = (e) => {
    e.preventDefault();
    setPassChangeDisabled(!passChangeDisabled);
    console.log("enable change password");
  };

  return (
    <StyledPageContent>
      <StyledCard>
        <StyledCardHeading>SETTINGS</StyledCardHeading>
        <StyledCardContent>
          {passChangeDisabled && (
            <button onClick={handleChangePass}>Change Password</button>
          )}
          {!passChangeDisabled && (
            <StyledForm onSubmit={handleChangePass}>
              <StyledInput>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="change password"
                  disabled={passChangeDisabled}
                  required
                />
                <div className="grid">
                  <button onClick={handleChangePass}>cancel</button>
                  <button type="submit">submit</button>
                </div>
              </StyledInput>
            </StyledForm>
          )}

          <button type="submit" onClick={handleLogout}>
            Logout
          </button>
        </StyledCardContent>
      </StyledCard>
    </StyledPageContent>
  );
};

export default Settings;
