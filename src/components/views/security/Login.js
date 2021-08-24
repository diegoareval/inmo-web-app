import React, {useContext} from "react";
import {
  Avatar,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutLineIcon from "@material-ui/icons/LockOutlined";
import useField from "../../../hooks/useField";
import styles from "./styles/styles";
import { FirebaseContext } from "../../../contexts/FirebaseContext";
import { useHistory } from "react-router-dom";



const Login = () => {
    const history = useHistory();
    const {auth} = useContext(FirebaseContext);

  const password = useField({ type: "password" });
  const email = useField({ type: "text" });



  const login = async (e)=> {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email.value, password.value).then((auth)=> {
        console.log("auth", auth);
        history.push('/')
    }).catch((err)=> console.log(err));
   
  }

  return (
    <Container maxWidth="xs">
      <div style={styles.paper}>
        <Avatar style={styles.avatar}>
          <LockOutLineIcon />
        </Avatar>
        <Typography component="h1" variant="H5">
         Iniciar sesion
        </Typography>
        <form style={styles.form} onSubmit={login}>
              <TextField
                name="email"
                type={email.type}
                onChange={email.onChange}
                value={email.value}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Ingrese su correo electronico"
              />
              <TextField
              margin="normal"
                name="password"
                variant="outlined"
                type={password.type}
                onChange={password.onChange}
                value={password.value}
                fullWidth
                label="Ingrese su contraseña"
              />
          <Grid container justify="center">
            <Grid item md={6} xs={12}>
              <Button
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                zize="large"
                style={styles.submit}
              >
                Iniciar Sesion
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
