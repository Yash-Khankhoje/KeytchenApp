import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDishes } from "../actions/dishActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Dish from "../components/Dish";
export default function Homescreen() {
  const dispatch = useDispatch();

  const dishesstate = useSelector((state) => state.getAllDishrsReducer);

  const { dishes, error, loading } = dishesstate;

  useEffect(() => {
    dispatch(getAllDishes());
  }, []);

  return (
    <div>
 <Filter/>
      <div className="row justify-content-center">
       
        {loading ? (
          <Loading/>
        ) : error ? (
          <Error error='Something went wrong'/>
        ) : (
          dishes.map((dish) => {
            return (
              <div className="col-md-3 m-3" key={dish._id}>
                <div>
                  <Dish dish={dish} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
