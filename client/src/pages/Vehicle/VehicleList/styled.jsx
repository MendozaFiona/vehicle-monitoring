import styled from "styled-components";

export const StyledAccordion = styled.details`
  border-bottom: 0;
  border-radius: 5px;
  background-color: #2b7a78;
  padding: 30px;

  * {
    color: white !important;
  }
  
  summary::after {
    background-color: white;
    border-radius: 5px;
  }
`;
