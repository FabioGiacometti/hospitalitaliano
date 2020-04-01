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
          Datos del Grupo Familiar
        </Typography>
        <Typography variant="h6" gutterBottom>
          1
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Apellido y Nombre"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Fecha de Nacimiento"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="DNI" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Parentezco
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={"age"}
                onChange={() => {}}
                autoWidth
              >
                <MenuItem value="">
                  <em>Hijo</em>
                </MenuItem>
                <MenuItem value={10}>Vecino</MenuItem>
                <MenuItem value={20}>Tio</MenuItem>
                <MenuItem value={30}>Amigo</MenuItem>
              </Select>
              <FormHelperText>Auto width</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="Couta Mensual" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Agregar nuevo integrante?"
            />
          </Grid>
        </Grid>
      </React.Fragment>
      <React.Fragment>
        <hr style={{margin: "50px 0", color: "red"}} />
        <Typography variant="h6" gutterBottom>
          2
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Apellido y Nombre"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Fecha de Nacimiento"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="DNI" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Parentezco
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={"age"}
                onChange={() => {}}
                autoWidth
              >
                <MenuItem value="">
                  <em>Hijo</em>
                </MenuItem>
                <MenuItem value={10}>Vecino</MenuItem>
                <MenuItem value={20}>Tio</MenuItem>
                <MenuItem value={30}>Amigo</MenuItem>
              </Select>
              <FormHelperText>Auto width</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="Couta Mensual" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Agregar nuevo integrante?"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  );
}
