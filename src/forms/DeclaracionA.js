import React from "react";
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
import decA from "./decA";
import Divider from '@material-ui/core/Divider';

function DecComponent(props) {
  const { items, id } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderBottom: ".5px solid #b0f4b0"
      }}
    >
     <Checkbox color="secondary" name="saveCard" value="yes" style={{marginTop: "0px"}} />
      <Typography variant="subtitle1" gutterBottom style={{marginRight: "12px", marginTop: "7px"}}>
        {id}
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={{marginTop: "7px"}}> 
        {items}
      </Typography>
    
    </div>
  );
}

export default function DeclaracionA() {
  //   const { id, dec } = decA;
  const declaraciones = decA.map(items => (
    <DecComponent items={items.dec} id={items.id} key={items.id} />
  ));

  return (
    <>
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Declaracion Jurada de Antecendetes de Salud{" "}
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1" gutterBottom>
            Por favor tildar la opcion que corresponda
          </Typography>
        </div>
        {declaraciones}
      </React.Fragment>
    </>
  );
}
