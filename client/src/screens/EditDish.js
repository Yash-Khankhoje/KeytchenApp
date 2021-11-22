import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDish, getDishById } from "../actions/dishActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function EditDish({ match }) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [price, setPrice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getdishbyidstate = useSelector((state) => state.getDishByIdReducer);

  const { dish, error, loading } = getdishbyidstate;

  const editdishstate = useSelector((state) => state.editDishReducer)
  const {editloading , editerror , editsuccess} = editdishstate;

  useEffect(() => {

    if(dish)
    {
        if(dish._id==match.params.dishid)
        {
            setname(dish.name)
            setdescription(dish.description)
            setcategory(dish.category)
            setPrice(dish.price)
            setimage(dish.image)
        }
        else{
            dispatch(getDishById(match.params.dishid));
        }
        
    }
    else{
        dispatch(getDishById(match.params.dishid));
    }



  }, [dish , dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editeddish = {
      _id : match.params.dishid,
      name,
      image,
      description,
      category,
      price
    };

    dispatch(editDish(editeddish))
  }

  return (
    <div>
    
     

      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Edit Dish</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && (<Success success='Dish details edited successfully'/>)}
        {editloading && (<Loading />)}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Edit Dish
          </button>
        </form>
      </div>
    </div>
  );
}
