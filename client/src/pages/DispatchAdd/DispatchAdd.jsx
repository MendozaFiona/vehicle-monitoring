import React, { useState } from "react";
import {
  StyledCard,
  StyledCardHeading,
  StyledCardContent,
  StyledForm,
} from "../../components/styled";
import DispatchForm from "../../components/DispatchForm";
import Popup from "../../components/Popup";
import DispatchFilter from "../../components/DispatchSelect";
import { initialDispatchData } from "../../utils/data";

const DispatchAdd = () => {
  const [formData, setFormData] = useState(initialDispatchData);
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addDispatch)
  };

  const testFunc = () => {
    console.log("test");
  };

  return (
    <StyledCard>
      <StyledCardHeading>Add Dispatch</StyledCardHeading>
      <StyledCardContent>
        {showPopup && (
          <Popup
            content={
              <DispatchFilter
                setFormData={setFormData}
                setShow={setShowPopup}
              />
            }
            type="list"
            func={testFunc}
            setShow={setShowPopup}
          />
        )}
        <StyledForm>
          <DispatchForm
            handleSubmit={handleSubmit}
            formData={formData}
            setFormData={setFormData}
            func={setShowPopup}
          />
        </StyledForm>
      </StyledCardContent>
    </StyledCard>
  );
};

export default DispatchAdd;
