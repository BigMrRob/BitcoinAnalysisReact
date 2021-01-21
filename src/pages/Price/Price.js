import React from 'react'
import PriceView from './PriceView'
import AnimatedBackground from '../../components/AnimatedBackground'

function Price() {
    return (
        <div>
            <br></br>
            <h1 className='center-text'>Price of Bitcoin Over Time</h1>
            <br></br><PriceView />
        </div>
    )
}

export default Price
