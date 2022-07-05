import React from 'react'
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { FaArrowCircleRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions';


const Account = () =>{
    const dispatch = useDispatch();
    const {user, logOut} = useUserAuth();
    const navigate = useNavigate();
    const handleLogOut = async() =>{
        dispatch(clearCart())
        await logOut();
        navigate("/");
    }
  return (
    <>
        <div className="dropdown m-2">
          <button className="btn btn-outline-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </button>
          <ul className="dropdown-menu m-2" aria-labelledby="dropdownMenuButton1">
            <li className='m-2'>
              <FaUserAlt className='mx-2'/>
              <span className='mx-2'>{user}</span>
               </li>
            <button className='btn' onClick={handleLogOut}>
              <FaArrowCircleRight className='mx-1'/>
              <span className='mx-2'>log out</span>
              </button>
          </ul>
        </div>
    </>
  )
}

export default Account