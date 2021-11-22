import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../actions/cartActions";
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Dish({ dish }) {


  AOS.init({

  })


  const [quantity, setquantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  function addtocart() {
    dispatch(addToCart(dish, quantity))
  }

  return (
    <div
      data-aos='zoom-in'
      className="shadow-lg p-3 mb-5 bg-white rounded"
      key={dish._id}

      style={{ margin: '70px' }}
    >
      <div onClick={handleShow}>
        <h1>{dish.name}</h1>
        <img src={dish.image} className='img-fluid' style={{ height: '200px', width: '200px' }} />
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
          Quantity
        </div>
        <div className='w-100 m-1'>
          Price : {parseInt(dish.price) * quantity} Rs/-
        </div>
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1 '>
          <button className="btn btn-danger" type="button" onClick={addtocart}>Add To Cart</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{dish.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={dish.image} className="img-fluid" style={{ height: '400px' }} />
          <p>{dish.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
