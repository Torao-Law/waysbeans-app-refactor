import React, { useState, useContext } from "react";
import Button from "../elements/button";
import Dropdown from "../elements/dropdown/user";
import ModalRegister from "../elements/auth/register";
import ModalLogin from "../elements/auth/login";
import Logo from "../assets/Icon.png";
import { UserContext } from "../config/userContext"
import { Link } from "react-router-dom"
import Cart from "../elements/cart";

export default function Headers() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [state, _] = useContext(UserContext)
  
  const loginModal = () => setShowLogin(false);
  const registerModal = () => setShowRegister(false);
  
  function switchRegister() {
    loginModal();
    setShowRegister(true);
  }
  
  function switchLogin() {
    registerModal();
    setShowLogin(true);
  }

  console.log(state.isLogin)

  return (
    <div className="shadow shadow-lime-950">
      <div className="px-28 h-20 grid content-center grid-cols-2 w-screen bg-white " >
        <div className="grid justify-items-start">
          <Link to='/'>
            <img  className="h-12" src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="grid justify-items-end">
          {state.isLogin ? (
            <div className="flex items-center">
              <Link to='/transactions'>
                <Cart />
              </Link>
              <div className="ml-10">
                <Dropdown />
              </div>
            </div>
          ) : (
            <div>
              <Button hasShadow className="mr-3" onClick={() => setShowLogin(true)}>LOGIN</Button>
              <Button isPrimary hasShadow onClick={() => setShowRegister(true)}>REGISTER</Button> 
            </div>
          )}
        </div>
      </div>
      <ModalRegister showModal={showRegister} closeModal={registerModal} loginModal={switchLogin} />
      <ModalLogin showModal={showLogin} closeModal={loginModal} loginModal={switchRegister} />
    </div>
  );
}
