import React from 'react'
import styled from 'styled-components'
import { reviews } from '../utils/constants'

const Reviews = () => {
  return (
    <Wrapper>
      <div className='section-center'>
      <div className='title'>
        <h2>Customer Reviews</h2>
        <div className='underline'></div>
      </div>
        <div className='services-center'>
          {reviews.map((service) => {
            const { id, img, name, text } = service
            return (
              <article key={id} className='service'>
                <img className='img-avatar' src = {img} alt ={name}/>
                <h4>{name}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 
  
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;
   background: var(--clr-primary-10);
 
  .header h2 {
    margin-bottom: 2rem;
    
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);

    }
    img{
      width:60px;
      height:60px;
      border-radius:50%;
      object-fit:cover;

    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Reviews
