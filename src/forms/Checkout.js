import React, {useState, useEff,ect} from "react";
import { makeStyles, CssBaseline, AppBar, Toolbar, Paper, Stepper, Step, StepLabel, Button, Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import CanalPago from "./CanalPago";
import Entrada from "./Entrada";
import DeclaracionA from "./DeclaracionA";
import DeclaracionB from "./DeclaracionB";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="primary" href="https://www.ross.com.ar/">
        ROSS-Outside the Box
      </Link>
      {" www.ross.com.ar"}
      {"."}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const steps = [
  "Datos Personales",
  "Grupo Familiar",
  "Canal de Pago",
  "Declaracion Jurada",
  "Declaracion Jurada",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <CanalPago />;
    case 3:
      return <DeclaracionA />;
    case 4:
      return <DeclaracionB />;
    case 5:
      return <Entrada />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
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
    <div style={{ backgroundColor: "#efefef", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar
          style={{
            padding:"0 4em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <img src={require("../assets/images/logo.png")} alt="" />
          <Typography variant="h6" color="inherit" noWrap>
            Afiliador Online
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={3}>
          {!activeStep > 0 && <div>
            <Typography component="h1" variant="h3" align="left">
              ¡Bienvenido/a!
            </Typography>
            <Typography component="h1" variant="h4" align="left">
              Al afiliador online del Hospital Italiano
            </Typography>
          </div>}
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por Anotarse!
                </Typography>
                <Typography variant="subtitle1">
                  En breve estaremos contactandole para confirmarle la suscripcion al servicio y detalles aparejados a su cuenta.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => window.open( 'http://www.hospital-italiano.org.ar',"_self")}
                    className={classes.button}
                  >
                  Volver
                  </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Atras
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? "Enviar Solicitud"
                      : "Siguiente"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </div>
  );
}
