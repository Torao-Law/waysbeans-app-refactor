import React from "react";
import Button from "../elements/button";
import Logo from "../assets/Icon.png";

export default function headers() {
  const handleClick = () => {
    console.log("Button clicked!");
  }
  return (
    <div className="shadow shadow-lime-950">
      <div className="container mx-auto px-10 flex justify-between py-2">
        <div>
          <img  className="h-12" src={Logo} alt="logo" />
        </div>

        <div className="flex">
          <Button hasShadow onClick={handleClick} className="mr-3">LOGIN</Button>
          <Button isPrimary hasShadow onClick={handleClick}>REGISTER</Button>
        </div>
      </div>
    </div>
  );
}
