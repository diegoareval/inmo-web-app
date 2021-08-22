import StateList from "./components/views/StateList";
import {Grid, MuiThemeProvider} from "@material-ui/core";
import theme from "./theme/theme";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./components/views/layout/NavBar";


function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
       <NavBar/>
       <Grid container>
       <Switch>
         <Route path="/" exact component={StateList}></Route>
       </Switch>
       </Grid>
      </MuiThemeProvider>
    </Router>

  );
}

export default App;
