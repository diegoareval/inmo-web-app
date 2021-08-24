import StateList from "./components/views/StateList";
import {Grid, MuiThemeProvider} from "@material-ui/core";
import theme from "./theme/theme";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./components/views/layout/NavBar";
import UserRegister from "./components/views/security/UserRegister";
import Login from "./components/views/security/Login";


function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
       <NavBar/>
       <Grid container>
       <Switch>
         <Route path="/" exact component={StateList}></Route>
         <Route path="/register" exact component={UserRegister}></Route>
         <Route path="/login" exact component={Login}></Route>
       </Switch>
       </Grid>
      </MuiThemeProvider>
    </Router>

  );
}

export default App;
