import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/LandingPage/Landing";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import JobsScreen from "./components/Jobs/JobsScreen";
import PostJob from "./components/Jobs/PostJob/PostJob";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/resetPassword" component={ResetPassword} />
          <Route path="/home" component={JobsScreen} />
          <Route path="/postJob" component={PostJob} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
