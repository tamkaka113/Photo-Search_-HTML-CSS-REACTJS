import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/comfy.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY > 120) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleOnScroll);

    return window.addEventListener("scroll", handleOnScroll);
  }, []);

  return (
    <NavContainer>
      <div className={header ? "nav-center active" : "nav-center"}>
        <div className="nav-header ">
          <Link to="/">
            <div className="nav-container " >

            <h2> iStore</h2>
            </div>
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map(({ id, url, text }) => {
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 900;
    width:100%

    height:40px
 
  
    transition: 0.2s ease-out;
  }
  .nav-center.active {

    background-color:var(--clr-primary-4);

  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-container {
   display:flex;
   justify-content:flex-start;
   align-items:center;

      img {
        width: 40px;
        
      }
      h2 {
        font-size:1.9rem;
        padding-left:10px;
        margin-top:5px;
        color: var(--clr-grey-3);
        font-style: italic;
      }

    }
    

  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        font-weight:500;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
