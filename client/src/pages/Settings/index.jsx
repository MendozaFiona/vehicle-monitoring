import React, { useState } from "react";
import {
  StyledPageContent,
  StyledCard,
  StyledCardHeading,
  StyledCardContent,
  StyledForm,
} from "../../components/ReusableComponents/styled";
import { StyledInput } from "./styled";

const Settings = () => {
  const [passChangeDisabled, setPassChangeDisabled] = useState(true);

  const handleChangePass = (e) => {
    e.preventDefault();
    setPassChangeDisabled(!passChangeDisabled);
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
        </StyledCardContent>
      </StyledCard>
    </StyledPageContent>
  );
};

export default Settings;
