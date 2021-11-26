import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header'
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Doctors from './pages/Home/Doctors/Doctors';
import Services from './pages/Home/Services/Services';
import Contact from './pages/Home/Contact/Contact';
import Signup from './pages/Login/Signup/Signup';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/Private Route/PrivateRoute';
import Appoint  from './pages/Appoint/Appoint'


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
      <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/doctors">
          <Doctors></Doctors>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/signup">
          <Signup></Signup>
        </Route>
        <Route exact path="/signin">
          <Login></Login>
        </Route>
        <PrivateRoute path="/booking/:service_name">
              <Appoint></Appoint>
            </PrivateRoute>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;