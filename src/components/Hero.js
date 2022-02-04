import React, {useState,useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { homeBannersData } from "../utils/constants";
import HomeBanner from "./Homebanner";
const Hero = () => {

  const [slideNum, setSlideNum] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (slideNum < homeBannersData.length - 1) {
        setSlideNum(slideNum + 1);
      } else {
        setSlideNum(0);
      }
    }, 5000);

  },[slideNum]);

  const moveDot = (idx) => {
    setSlideNum(idx);
  };

  
  return (
    <Wrapper >

      <div className="section-background"  style={{ transform: `translateX(${-100 * slideNum}%)` }} >
      {homeBannersData.map((data, index) => {
        return (
     <HomeBanner  key={index} {...data} />
        
        );
      })}
      </div>
     { <div className="dots">
        {Array(homeBannersData.length)
          .fill()
          .map((_, index) => {
            return (
              <span
                onClick={() => moveDot(index)}
                key={index}
                className={slideNum === index ? "dot active" : "dot"}
              ></span>
            );
          })}
      </div>}

     
    </Wrapper>
  );
};

const Wrapper = styled.section`
position:relative;
overflow:hidden;
  .section-background {
    display:flex;
    transition: 0.5s ease-out;
   
  }
  .dots {
    position: absolute;
    bottom: 30px;
    left: 50%;

    display: flex;
    transform: translateX(-50%);

    .dot {
      position: relative;
      content: "";

      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin: 0 10px;
      border: 2px solid var(--clr-primary-8);
      box-shadow: 2.5px 2px 8px rgba(0, 0, 0, 0.3);
      transition: 0.3s ease;
     
      cursor: pointer;
    }
    .dot:before {
      position: absolute;
      content: "";
      right: 0;
      bottom: 0;

      width: calc(100% - 0.05px);
      height: calc(100% - 0.05px);
      border-radius: 50%;
      transform: translate(1px, 1px) scale(0.7);
      opacity: 0;
      transition: 0.3s ease-in-out;

      background-color: var(--clr-primary-6);
    }

    .dot.active:before {
      opacity: 1;
      transform: translate(1px, 1px) scale(1);
    }
  }
`;

export default Hero;
