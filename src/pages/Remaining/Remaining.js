import React from 'react'
import Data from '../../data/remaining-coins'
import RemainingChart from './RemainingChart'

class Remaining extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            type: 'line',
            data: []
        }

    }

    componentDidMount() {
        this.setState({
            data: JSON.stringify(Data.values)
        })
    }

    render() {

        return (
            <div>  
                
                <h1 className="chart-header center-text">Price of Bitcoin Against the Number of Remaining Coins</h1>
                <br></br><RemainingChart />
            </div>
        )
    }

}

export default Remaining
