export const addToCart=(dish , quantity)=>(dispatch , getState)=>{
    var cartItem = {
        name: dish.name,
        _id: dish._id,
        image: dish.image,
        quantity: quantity,
        price: dish.price,
        totalPrice: parseInt(dish.price) * quantity

    }

    if(cartItem.quantity>10)
    {
        alert('You cannot add more than 10 quantities')
    }
    else{
        if(cartItem.quantity<1)
        {
            dispatch({type:'DELETE_FROM_CART' , payload:dish}) 
        }
        else{
            dispatch({type:'ADD_TO_CART' , payload : cartItem})
        }  
    }
    
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}

export const deleteFromCart=(dish)=>(dispatch , getState)=>{

     dispatch({type:'DELETE_FROM_CART' , payload:dish})      
     const cartItems = getState().cartReducer.cartItems
     localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}