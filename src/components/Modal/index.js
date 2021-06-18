import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

/*Styles*/
import "./styles.css";

export default function FormDialog({ open, handleClose }) {
  return (
    <div>
      <Dialog maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Iniciar sesión</DialogTitle>
        <DialogContent>
          <div className="Modal_Inputs">
            <TextField
              variant="outlined"
              placeholder="Correo electrónico"
              type="email"
              fullWidth
            />
          </div>
          <div className="Modal_Inputs">
            <TextField
              variant="outlined"
              placeholder="Contraseña"
              type="password"
              fullWidth
            />
          </div>
          <div className="Modal_Inputs">
            <Button variant="contained" color="primary" fullWidth>
              Ingresar
            </Button>
          </div>
          <div className="Modal_Inputs">
            <Button variant="outlined" color="default" fullWidth>
              ¿Olvidaste tu contraseña?
            </Button>
          </div>
          <br />
          
          <Typography variant="h6">¿Aún no tienes cuenta?</Typography>
          <div className="Modal_Inputs">
            <Button variant="outlined" color="primary" fullWidth>
              Crear cuenta
            </Button>
          </div>
          <Divider />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
