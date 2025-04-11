import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/joy/Switch";
import "../styles/Header.css";

function Header() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log("click");
  };

  return (
    <div className="Header">
      <h1>Guneet Gill</h1>

      <span className="switch-container">
        <FormControlLabel
          className="switch"
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              size="lg"
              variant="solid"
              color={checked ? "neutral" : "primary"}
            />
          }
          label="Crazy Mode"
        />
      </span>
    </div>
  );
}

export default Header;
