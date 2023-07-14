import { Box, Card } from "@mui/material";
import React from "react";
import BasicCard from "./Card";

const CardContainer = ({ previousExplaination }) => {
  return (
    <Box sx={{ marginTop: "50px" }}>
      {previousExplaination.map((explaination, index) => (
        <BasicCard key={index} explaination={explaination} />
      ))}
    </Box>
  );
};

export default CardContainer;
