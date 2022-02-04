import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'
import heroBcg from '../assets/hero-bcg.jpeg';
const ProductsPage = () => {
  return (
    <main>
    
      

      <Wrapper className='page'>
      <div
        className="section-background"
        style={{ backgroundImage: `url(${heroBcg})` }}
      >
       {/*  <PageHero title='products' /> */}
      </div>
   
        <div className='section-center products'>
          <Filters />
          <div  className='products-list'>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
.section-background {
  height: 25rem;
  position: relative;

  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  
 
}
.products-list {
  padding-right:1rem;
}
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
