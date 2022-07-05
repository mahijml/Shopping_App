import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Account from "./account";
import { useNavigate } from "react-router";
import { useUserAuth } from '../context/UserAuthContext';

const Header = () => {
    const state = useSelector((state)=> state.handleCart);
    const {user} = useUserAuth();
    const [searchValue , setSearchValue] = useState('');
    
    const navigate = useNavigate();
    const inputEl = useRef("");
      const handleChange = (e)=>{
        setSearchValue(e.target.value)
      }
    const getSearchTerm = (e)=>{ 
        e.preventDefault();
        
        if(searchValue !== ''){
            
            navigate(`/search/${searchValue}`);
            setSearchValue('');
          }
    }
    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
                <div className="container">
                    
                    <h4 className="navbar-brand me-4 mb-2 fs-4 fw-bolder">Web-Shopping</h4>
                    <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    
                    <form className="d-flex">
                        <input className="form-control me-2" ref={inputEl} onChange={handleChange} value={searchValue} type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-dark" onClick={getSearchTerm}>Search</button>
                    </form>
                    
                   
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active m-2" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link m-2" to="/products">product</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link m-2" to="/contact">contact</NavLink>
                        </li>
                        
                    </ul>
                    <div className="buttons ">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        
                        {user ?
                        <li className="nav-item">
                         <Account/>
                        </li>
                        :
                        <>
                        <li className="nav-item">
                        <NavLink className="nav-link m-2" to="/register" >
                            register
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link m-2" to="/login" >
                            login
                        </NavLink>
                        </li>
                        </>
                        }
                        <li className="nav-item">
                        <NavLink className="btn btn-outline-dark m-2" to="/cart">card({state.length})</NavLink>
                        </li>
                    </ul>
                        
                    </div>
                    </div>
                    
                </div>
        </nav>
        </div>
    )
}
export default Header;