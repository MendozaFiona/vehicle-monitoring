import styled from "styled-components";

export const StyledAccordion = styled.details`
  border-bottom: 0;
  border-radius: 10px;
  background-color: #2b7a78;
  padding: 30px 0;

  * {
    color: white !important;
  }

  .fm-table-data {
    background-color: #17252a;
    padding: 10px 0;
    overflow-y: auto;
    border-radius: 10px;
    margin: 40px 25px 0 25px;

    table {
      margin: 0;
    }
  }

  td,
  th {
    text-align: center;
    font-size: 20px;
  }

  th {
    border-color: #2b7a78;
  }

  td {
    border-width: 0;
  }

  summary {
    position: relative;
    padding: 0 30px;

    .grid {
      position: absolute;
      top: 0;
      right: 80px;
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

export const StyledTitle = styled.div`
  background-color: #17252a;
  max-width: 200px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
`;
