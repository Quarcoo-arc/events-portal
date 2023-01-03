import React from "react";
import { MoreVert } from "@mui/icons-material";

const Event = ({ event }) => {
  return (
    <div id="event">
      <a href="/#">
        <div></div>
        <div className="circle">
          <MoreVert />
        </div>
        <div></div>
      </a>
    </div>
  );
};

export default Event;
