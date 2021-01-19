import React from 'react'
import PriceView from './PriceView'
import './Price.css'
  
function Price() {
    return (
        <div>
            <h1 className='header'>Price of Bitcoin Over Time</h1>
            <PriceView />
        </div>
    )
}

export default Price
