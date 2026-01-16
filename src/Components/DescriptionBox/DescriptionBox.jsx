import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade]">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An ecommerce website is an online store where customers can find products, browse offerings, and place purchases online. It facilitates the transaction between a buyer and seller.A digital storefront can serve as the virtual equivalent of the product shelves, sales staff, and cash register of a physical shop.</p>
        <p>E-commerce websites typically display product or services along with detailed description images,prices,and any available variation(e.g.sizes,colorc).Each product usually have its own dedicated pages with its relevant information. </p>
      </div>
    </div>
  )
}

export default DescriptionBox
