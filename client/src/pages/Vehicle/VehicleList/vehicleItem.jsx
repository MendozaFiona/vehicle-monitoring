import React from "react";
import { StyledAccordion } from "./styled";

const sampleItems = [
  {
    id: 1,
    name: "Item 1",
    desc: "Item 1 description",
  },
  {
    id: 2,
    name: "Item 2",
    desc: "Item 2 description",
  },
];

const VehicleItem = () => {
  return (
    <>
      {sampleItems.map((item) => (
        <StyledAccordion key={item.id}>
          <summary>{item.name}</summary>
          <p>{item.desc}</p>
        </StyledAccordion>
      ))}
    </>
  );
};

export default VehicleItem;
