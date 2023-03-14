import React, { useState } from "react";
import {
  StyledCard,
  StyledCardHeading,
  StyledCardContent,
} from "../../components/styled";
import DispatchItems from "../../components/DispatchItems";
import Popup from "../../components/Popup";
import DispatchCompleteForm from "../../components/DispatchCompleteForm";
import { initialCompleteDispatchData } from "../../utils/data";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  updateDispatch,
  getDispatches,
} from "../../reducer/dispatch/dispatchSlice";
import DispatchSearch from "../../components/DispatchSearch";

const DispatchList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState(initialCompleteDispatchData);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(updateDispatch(formData));

    if (!res.error) {
      toast.success("Successfully Completed Dispatch");
      dispatch(getDispatches());
      setFormData(initialCompleteDispatchData);
      setShowPopup(false);
    }
  };

  return (
    <>
      <DispatchSearch />
      <StyledCard>
        <StyledCardHeading>Dispatch List</StyledCardHeading>
        <StyledCardContent>
          {showPopup && (
            <Popup
              content={
                <DispatchCompleteForm
                  handleSubmit={handleSubmit}
                  formData={formData}
                  setFormData={setFormData}
                />
              }
              type="form"
              setShow={setShowPopup}
            />
          )}
          <DispatchItems
            setShow={setShowPopup}
            formData={formData}
            setFormData={setFormData}
          />
        </StyledCardContent>
      </StyledCard>
    </>
  );
};

export default DispatchList;
