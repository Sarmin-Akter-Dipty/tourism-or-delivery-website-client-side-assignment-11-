import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Admin from './Pages/Admin/Admin';
import Banner from './Pages/Banner/Banner';
import AuthProvider from './Pages/Context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import MainItems from './Pages/Items/MainItems';
import Login from './Pages/Login/Login';
import Manageitems from './Pages/ManageItems/Manageitems';
import NotFound from './Pages/NotFound/NotFound';
import ManageAllOrders from './Pages/OrderNow/ManageAllOrders';
import MyOrder from './Pages/OrderNow/MyOrder';
import OrderNow from './Pages/OrderNow/OrderNow';
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
            <Route path="/items">
              <MainItems></MainItems>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/ordernow/:itemId">
              <OrderNow></OrderNow>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addservice">
              <AddService></AddService>
            </Route>
            <Route path="/manageitems">
              <Manageitems></Manageitems>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <privateRoute path="/myorders">
              <MyOrder></MyOrder>
            </privateRoute>

            <PrivateRoute path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

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
