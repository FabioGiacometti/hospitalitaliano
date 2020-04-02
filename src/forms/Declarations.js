import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
// import DecComonent from "./DecComponent";
import decA from "./decA";
import decB from "./decB";
import DeclaracionA from "./DeclaracionA";
import DeclaracionB from "./DeclaracionB";
import Button from "@material-ui/core/Button";

function DecComponent(props) {
    const { items } = props;
    return (
      <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <FormControlLabel
        control={
          <Checkbox color="secondary" name="saveCard" value="yes" />
        }
      />
      <Typography variant="subtitle1" gutterBottom>
        {items}
      </Typography>
    </div>
    );
  }

const declarA = decA.map(items => (
  <DecComponent items={items.dec} key={items.id} />
));
const declarB = decB.map(items => (
  <DecComponent items={items.dec} key={items.id} />
));

function getStepContent(step) {
  switch (step) {
    case 0:
      return { declarA };
    case 1:
      return { declarB };
    default:
      throw new Error("Unknown step");
  }
}

export default function Declarations() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      {getStepContent(activeStep)}
      <React.Fragment>
        {getStepContent(activeStep)}
        <div>
          {activeStep !== 0 && <Button onClick={handleBack}>Atras</Button>}
          <Button variant="contained" color="primary" onClick={handleNext}>
            Enviar Solicitud
          </Button>
        </div>
      </React.Fragment>
    </>
  );
}
