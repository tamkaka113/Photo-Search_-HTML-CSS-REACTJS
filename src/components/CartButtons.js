import React, { useState } from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const [isShow, setIsShow] = useState(false);
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  const { email, family_name, picture } = myUser ? myUser : "";

  const nickName = email?.substring(0, email.lastIndexOf("@"));
  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <>
          <div
            className="user-container"
            onClick={() => {
              handleShow();
            }}
          >
            <p>{family_name || nickName}</p>
            <img className="user-photo" src={picture || ""} alt="" />
          </div>
          <ul className={isShow ? "user-account active" : "user-account"}>
            <li className="user-account-option">
              <span>My account</span>{" "}
            </li>
            <li className="user-account-option">
              <span>My wishlist</span>{" "}
            </li>
            <li className="user-account-option">
              <span
                onClick={() => {
                  clearCart();
                  localStorage.removeItem("user");
                  logout();
                }}
              >
                Logout
              </span>
            </li>
          </ul>
        </>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 285px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }

  .user-container {
  display:flex;
  width:180px;
  justify-content: center;
  align-items: start;
  margin-bottom:-20px;
  cursor:pointer;
  }
 

  
    p {
      font-size: 1.2rem;
      color: var(--clr-grey-1);
      padding-right:6px;
  
  
   }
    .user-photo {
      width:30px;
      height:30px;
      border-radius:50%;
      z-index:100;
      border: 2px, solid,  var(--clr-primary-5)
    }

  }
 
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }

.user-account {
    position: absolute;
    right: 20px;
    top: 55px;

    padding: 7px 0;
    border-radius: 4px;
    margin-top:8px;
    width: max-content;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0.15);
    visibility: hidden;
    opacity: 0;
    background-color: var(--clr-white);

    transition: all 0.15s linear;
  }

.user-account:before {
    position: absolute;
    right: 5px;
    top: -19.5px;

    content: "";

    border-top: 10.5px solid transparent;
    border-left: 10.5px solid transparent;
    border-right: 10.5px solid transparent;
    border-bottom: 10.5px solid  var(--clr-white);
  }
  .user-account.active {
    visibility: visible;
    opacity: 1;
  }
  .user-account-option {
    padding:0 10px;
    font-size:1.3rem;
  }

  .user-account-option:hover {
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
  

 
`;
export default CartButtons;
