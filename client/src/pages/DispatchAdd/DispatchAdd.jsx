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
import { useDispatch, useSelector } from "react-redux";
import { addDispatch, reset } from "../../reducer/dispatch/dispatchSlice";
import { toast } from "react-toastify";

const DispatchAdd = () => {
  const [formData, setFormData] = useState(initialDispatchData);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.dispatch);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(addDispatch(formData));

    if (!res.error) {
      toast.success("Successfully Added Dispatch");
      setFormData(initialDispatchData);
      dispatch(reset());
    } else {
      toast.error(res.payload);
    }
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
            setShow={setShowPopup}
          />
        )}
        <StyledForm>
          <DispatchForm
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            formData={formData}
            setFormData={setFormData}
            setShow={setShowPopup}
          />
        </StyledForm>
      </StyledCardContent>
    </StyledCard>
  );
};

export default DispatchAdd;
