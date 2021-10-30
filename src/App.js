import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Banner from './Pages/Banner/Banner';
import AuthProvider from './Pages/Context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import MainItems from './Pages/Items/MainItems';
import SingleItems from './Pages/Items/SingleItems';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Ourteam from './Pages/OurTeam/Ourteam';
import Pricing from './Pages/Pricing/Pricing';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <MainItems></MainItems>
              <Pricing></Pricing>
              <Ourteam></Ourteam>
            </Route>
            <Route path="/home">
              <Banner></Banner>
              <MainItems></MainItems>
              <Pricing></Pricing>
              <Ourteam></Ourteam>
            </Route>
            <PrivateRoute path="/singleitems/:id">
              <SingleItems></SingleItems>
            </PrivateRoute>
            <Route path="/pricing">
              <Pricing></Pricing>
            </Route>
            <Route path="/items">
              <MainItems></MainItems>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
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
