import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import AddDish from "./AddDish";
import EditDish from "./EditDish";
import Orderslist from "./Orderslist";
import Disheslist from "./Disheslist";
import Userslist from "./Userslist";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to={'/admin/userslist'} style={{color: 'white'}}>Users List</Link>
            </li>
            <li>
            <Link to={'/admin/disheslist'} style={{color: 'white'}}>Dishes List</Link>
            </li>
            <li>
            <Link to={'/admin/adddish'} style={{color: 'white'}}>Add Dish</Link>
            </li>
            <li>
            <Link to={'/admin/orderslist'} style={{color: 'white'}}>Orders List</Link>
            </li>

            
          </ul>


          <Switch>
          <Route path="/admin" component={Userslist} exact/>
              <Route path="/admin/userslist" component={Userslist} exact/>
              <Route path="/admin/orderslist" component={Orderslist} exact/>
              <Route path="/admin/disheslist" component={Disheslist} exact/>
              <Route path="/admin/adddish" component={AddDish} exact/>
              <Route path="/admin/editdish/:dishid" component={EditDish} exact/>
          </Switch>
        </div>
      </div>
    </div>
  );
}
