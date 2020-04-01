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

export default function PaymentForm() {
  return (
    <>
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Seleccione Canal de Pago
        </Typography>
        <div style={{ display: "flex", alignItems:"center"}}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
          />
          <Typography variant="h6" gutterBottom>
            A Domicilio
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="Domicilio" fullWidth />
          </Grid>
          <Grid item xs={4} md={2}>
            <TextField required id="cardNumber" label="Numero" fullWidth />
          </Grid>
          <Grid item xs={4} md={2}>
            <TextField required id="expDate" label="Piso" fullWidth />
          </Grid>
          <Grid item xs={4} md={2}>
            <TextField required id="expDate" label="Depto" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField required id="expDate" label="Barrio" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField required id="expDate" label="Localidad" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField required id="expDate" label="Provincia" fullWidth />
          </Grid>
        </Grid>
      </React.Fragment>
      <hr style={{ margin: "50px 0", color: "red" }} />
      <div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start" }}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveCard" value="yes" />}
        />
        <Typography variant="h6" gutterBottom>
          Directo
        </Typography>
      </div>
      <React.Fragment>
        <hr style={{ margin: "50px 0", color: "red" }} />
        <Typography variant="h6" gutterBottom>
          Tarjeta de Credito
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4}>
            <div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start" }}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveCard" value="yes" />
                }
              />
              <Typography variant="subtitle1" gutterBottom>
                MasterCard
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div style={{ display: "flex" , alignItems:"center", justifyContent:"flex-start"}}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveCard" value="yes" />
                }
              />
              <Typography variant="subtitle1" gutterBottom>
                Visa
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div style={{ display: "flex" ,alignItems:"flex-start", justifyContent:"flex-start"}}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveCard" value="yes" />
                }
              />
              <Typography variant="subtitle1" gutterBottom>
                Naranja
              </Typography>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  );
}
