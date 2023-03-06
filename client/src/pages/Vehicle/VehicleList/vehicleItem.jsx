import React from "react";
import { StyledAccordion } from "./styled";

const sampleItems = [
  {
    name: "Item 1",
    desc: "Item 1 description",
  },
  {
    name: "Item 2",
    desc: "Item 2 description",
  },
];

const VehicleItem = () => {
  return (
    <>
      {sampleItems.map((item) => (
        <StyledAccordion>
          <summary role="button">{item.name}</summary>
          <p>{item.desc}</p>
        </StyledAccordion>
      ))}
    </>
  );
};

export default VehicleItem;
