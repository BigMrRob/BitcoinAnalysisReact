import React from 'react'
import DifficultyChart from './DifficultyChart'
function Difficulty() {
    return (
        <div>
           <h1 className='chart-header center-text'>Tracking the Price of Bitcoin Against the Difficulty Adjustment Rate</h1>
           <br></br><DifficultyChart />
        </div>
    )
}

export default Difficulty
