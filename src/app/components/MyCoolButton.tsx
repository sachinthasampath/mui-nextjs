"use client";

import Button from "@mui/material/Button";

export default function MyCoolButton() {
  return (
    <Button variant="contained" onClick={() => alert("You clicked the MUI button!")}>
      Click Me!
    </Button>
  );
}
