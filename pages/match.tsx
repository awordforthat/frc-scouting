import { Button } from "@mui/material";
import { NextPage } from "next";
import * as React from "react";

const Match: NextPage = () => {
  return (
    <>
      <div>Reporter name</div>
      <div>Match Number</div>
      <div>Team Number</div>
      <div>Auto</div>
      <div>Teleop</div>
      <div>Climb</div>
      <div>Notes</div>
      <Button variant="contained">Submit</Button>
    </>
  );
};

export default Match;
