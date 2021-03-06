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
import COLLECTIONS from "../../../constants/collections";
import FirebaseService from "../../../services/firebase-db-operations";


const UserRegister = () => {
    const {db, auth} = useContext(FirebaseContext);

  const name = useField({ type: "text" });
  const password = useField({ type: "password" });
  const email = useField({ type: "text" });
  const lastName = useField({ type: "text" });

const clean = ()=> {
  name.clean();
  password.clean();
  email.clean();
  lastName.clean();
}

  const sendUser = async (e)=> {
    e.preventDefault();
     auth.createUserWithEmailAndPassword(email.value, password.value ).then(async(authe)=> {
       const paloadDb = {
         uid: authe.user.uid,
         email: email.value,
         name: name.value,
         lastName: lastName.value
       }
      const insertedData = await new FirebaseService(db).insert(COLLECTIONS.USERS, paloadDb);
      console.log("insertedData", insertedData);
      clean();
     }).catch((err)=> console.log(err))
    
  }

  return (
    <Container maxWidth="md">
      <div style={styles.paper}>
        <Avatar style={styles.avatar}>
          <LockOutLineIcon />
        </Avatar>
        <Typography component="h1" variant="H5">
          Registre su cuenta
        </Typography>
        <form style={styles.form} onSubmit={sendUser}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <TextField
                name="name"
                type={name.type}
                onChange={name.onChange}
                value={name.value}
                fullWidth
                label="Ingrese su nombre"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                name="lastname"
                type={lastName.type}
                onChange={lastName.onChange}
                value={lastName.value}
                fullWidth
                label="Ingrese sus apellidos"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                name="email"
                type={email.type}
                onChange={email.onChange}
                value={email.value}
                fullWidth
                label="Ingrese su correo electronico"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                name="password"
                type={password.type}
                onChange={password.onChange}
                value={password.value}
                fullWidth
                label="Ingrese su contrase??a"
              />
            </Grid>
          </Grid>
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
                Registrarse
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default UserRegister;
