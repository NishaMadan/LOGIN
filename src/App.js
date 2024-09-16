import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import ForgetPassword from "./components/forget_pwd";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forget_pwd" component={ForgetPassword} />
        <Redirect from="/" to="/signup" />
      </Switch>
    </>
  );
}

export default App;
