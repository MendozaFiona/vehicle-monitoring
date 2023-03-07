import styled from "styled-components";

export const StyledAccordion = styled.details`
  border-bottom: 0;
  border-radius: 5px;
  background-color: #2b7a78;
  padding: 30px;

  * {
    color: white !important;
  }

  summary {
    position: relative;

    .grid {
      position: absolute;
      top: -10px;
      right: 50px;
      grid-template-columns: 130px 130px;

      button {
        max-height: 40px;
        width: 100%;
        padding: 5px 0;
      }
    }
  }

  summary::after {
    background-color: white;
    border-radius: 5px;
  }
`;
