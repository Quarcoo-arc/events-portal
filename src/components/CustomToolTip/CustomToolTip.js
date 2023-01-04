import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CustomToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="bottom-end" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    width: 200,
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    borderRadius: "1rem",
    padding: "1.5rem 0.5rem 1rem",
  },
}));

export default CustomToolTip;
