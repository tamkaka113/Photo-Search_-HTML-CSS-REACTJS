import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const HomeBanner = (data) => {

 const {background, title, description, strong} = data
  return (
  <Wrapper
      className="background-item"
     style={{ backgroundImage: `url(${background})` }} 
    >
      <article className="content">
        <h1>{title}</h1>

        <p className="strong">{strong}</p>
        <p className="description">
         {description}
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
    </Wrapper>

  );
};
const Wrapper = styled.section`
    height: 35rem;
    flex-shrink: 0;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    position:relative;
\
    .content {
        position: absolute;
        bottom:40px;
        left: 30px;

    }

   h1 {
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: uppercase;
    color:var(--clr-white)
   }

   .description {
    font-size: 1.6rem;
    font-weight: 600;
 
    color:var( --clr-primary-5);
    

   }
  .strong {
    font-size: 1.6rem;
    font-weight: 600;

    color:var( --clr-grey-4)

  }
`;
export default HomeBanner;
