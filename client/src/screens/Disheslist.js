import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDish, getAllDishes } from "../actions/dishActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
export default function Disheslist() {
  const dispatch = useDispatch();

  const dishesstate = useSelector((state) => state.getAllDishesReducer);

  const { dishs, error, loading } = dishesstate;
  useEffect(() => {
    dispatch(getAllDishes());
  }, []);
  return <div>
    <h2>Dishes List</h2>
    {loading && (<Loading/>)}
    {error && (<Error error='Something went wrong'/>)}

    <table  className='table table-bordered table-responsive-sm'>

        <thead className='thead-dark'>
            <tr>
                <th>Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {dishes && dishes.map(dish=>{

            return <tr>
                <td>{dish.name}</td>
                <td>
                   {dish.price} <br/>                    
                </td>
                <td>{dish.category}</td>
                <td>
                    <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteDish(dish._id))}}></i>
                    <Link to={`/admin/editdish/${dish._id}`}><i className='fa fa-edit m-1'></i></Link>
                </td>

            </tr>

        })}
        </tbody>

    </table>

   
  </div>;
}
