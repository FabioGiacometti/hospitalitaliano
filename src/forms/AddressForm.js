import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos Personales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Domicilio"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        
        <Grid item xs={4}>
          <TextField
            id="address2"
            name="address2"
            label="Piso"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="address2"
            name="address2"
            label="Departamento"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="address2"
            name="address2"
            label="Codigo Postal"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Provincia"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Pais"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Este es mi domicilio Principal"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}