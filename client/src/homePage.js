import "./css/App.css";
import "./css/index.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import book from "./pages/book";
import user from "./pages/user";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Basket from "./pages/Cart";
import ShowUserInfo from "./pages/showUserInfo";
import EditUserInfo from "./pages/editUser"
import AllOrders from "./pages/AllOrders";
import PostBook from "./pages/postBook";
import Order from "./pages/Order";
import EditBook from "./pages/EditBook";
import Register from "./pages/register";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/search"> Search</Link>
          <Link to="/login"> Login</Link>
          <Link to="/cart"> cart</Link>
          <Link to="/createpost"> Create A Post</Link>
          <Link to="/book/:id"> click a book</Link>   
          <Link to="/user/:uid"> user</Link>
          <Link to="/user/info/:uid"></Link>  
          <Link to="/user/editinfo/:uid"></Link>  
          <Link to="/user/AllOrders/:uid"></Link>
         
                   
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/search/:query" exact component={Search} />
          <Route path="/search/filter/:filter" exact component={Search} />
          <Route path="/login" exact component={Login} />
          <Route path="/cart" exact component={Basket} />
          <Route path="/createpost" exact component={CreatePost} />
          <Route path="/book/:id" exact component={book} />
          <Route path="/user/:uid" exact component={user} />
          <Route path="/userinfo/:uid" exact component={ShowUserInfo} />
          <Route path="/edituserinfo/:uid" exact component={EditUserInfo} />
          <Route path="/user/AllOrders/:uid" exact component={AllOrders} />
          <Route path="/user/postBook/:uid" exact component={PostBook} />
          <Route path="/user/editBook/:uid/:bid" exact component={EditBook} />
          <Route path="/order" exact component={Order} />
          <Route path="/order/:bid" exact component={Order} />
          <Route path="/order/orders/:bids" exact component={Order} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </div>

    
  );
}

export default App;

