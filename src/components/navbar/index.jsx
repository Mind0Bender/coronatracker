import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { mobile } from "../../App";
import "./navbar.css";

const DeskMenu = () => {
  return (
    <div>
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/about" className="item">
        About Us
      </Link>
      <Link to="/contactus" className="item">
        Contact Us
      </Link>
    </div>
  );
};

const Hamburger = (props) => {
  let { setShow } = props;
  return (
    <div
      className="hamburger"
      onClick={() => {
        setShow(true);
      }}
    >
      <div className="hamstick"></div>
      <div className="hamstick"></div>
      <div className="hamstick"></div>
    </div>
  );
};

const MobMenu = (props) => {
  let { show, setShow, mob } = props;
  return (
    <div className={"mobMenu " + (show && mob ? "" : "hide")}>
      <Link to="/" className="item">
        Home
      </Link>
      <br />
      <Link to="/about" className="item">
        About Us
      </Link>
      <br />
      <Link to="/contactus" className="item">
        Contact Us
      </Link>
      <p
        onClick={() => {
          setShow(false);
        }}
        className="close"
      >
        Close
      </p>
    </div>
  );
};

const NavBar = () => {
  let mob = useContext(mobile);
  let [trans, setTrans] = useState(true);
  let [show, setShow] = useState(false);

  window.onscroll = () => {
    setTrans(window.pageYOffset < 1);
  };

  return (
    <>
      <div className={"navbar " + (trans ? "trans" : "front")}>
        <div className="brand">𝓒𝓸𝓻𝓸𝓷𝓪 𝓣𝓻𝓪𝓬𝓴𝓮𝓻</div>
        {mob ? <Hamburger setShow={setShow} /> : <DeskMenu />}
      </div>
      <MobMenu mob={mob} show={show} setShow={setShow} />
    </>
  );
};

export default NavBar;
