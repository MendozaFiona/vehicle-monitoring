import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledPageContent,
  StyledCard,
  StyledCardHeading,
  StyledCardContent,
  StyledForm,
} from "../../components/styled";
import { StyledInput } from "./styled";
import { updateUser } from "../../reducer/user/userSlice";
import { toast } from "react-toastify";

const Settings = () => {
  const dispatch = useDispatch();
  const [passChangeDisabled, setPassChangeDisabled] = useState(true);
  const [passChange, setPassChange] = useState("");

  const handleChangePass = () => {
    setPassChangeDisabled(!passChangeDisabled);
    setPassChange("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(updateUser({ password: passChange }));
    console.log(res);
    if (!res.error) {
      toast.success("Successfully Changed");
      handleChangePass();
    } else {
      toast.error(res.payload);
    }
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
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Change Password"
                  autoComplete="off"
                  value={passChange}
                  onChange={(e) => {
                    setPassChange(e.target.value);
                  }}
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
        </StyledCardContent>
      </StyledCard>
    </StyledPageContent>
  );
};

export default Settings;
