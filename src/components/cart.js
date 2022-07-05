import React from 'react';
import { useSelector , useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addItem, delItem, delCart} from "../redux/actions/index";

function Cart() {
    const state = useSelector((state)=> state.handleCart);
    const dispatch = useDispatch();
    let totalprice = 0 ;
    const handleClose = (item) =>{
        dispatch(delCart(item))
    }
    const handleAdd = (item) =>{
        dispatch(addItem(item))
    }
    const handleDel = (item) =>{
        dispatch(delItem(item))
    }
    const cartItems = (cartItem) =>{
        totalprice += cartItem.price * cartItem.qty;
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className='container py-4'>
                    <button onClick={()=> handleClose(cartItem)} className='btn-close float-end' aria-label='Close'></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px"/>
                        </div>

                        <div className='col-md-4'>
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'> ${cartItem.price * cartItem.qty}</p>
                            <div className='d-flex' >
                            <button className='btn btn-outline-dark mx-2' onClick={()=> handleDel(cartItem)}>-</button>
                            <h4 className='text-center mx-2'>{cartItem.qty}</h4> 
                            <button className='btn btn-outline-dark mx-2' onClick={()=> handleAdd(cartItem)}>+</button>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = ()=>{
        return(
            <div className='px-4 my-5 bg-light rounde-3 py-5'>
            <div className='container py-4'>
                <div className='row'>
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const button = ()=>{
       return(
        <div className='container '>
        <div className='d-flex flex-row justify-content-end'>
            <NavLink to="/checkout" className='btn btn-outline-dark mb-5 w-25'>
                proceed to checkout
            </NavLink>
            </div>
        </div>
       )
    }
    const total = ()=>{
        return(
            <div className='container'>
            <div className='d-flex flex-row justify-content-end '>
            <h2 className='bold mb-3 w-auto'>Total price : ${totalprice}</h2>
            </div>  
            </div>
        )
    }
    return (
        <div> 
            
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && total()}
            {state.length !== 0 && button()}
        </div>
    )
}

export default Cart;
