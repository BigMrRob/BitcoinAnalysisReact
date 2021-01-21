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
            <>  
                <div className="chart-header center-content">
                    <h1 className="center-text">Price of Bitcoin Against the Number of Remaining Coins</h1>
                </div>
                <div className="center-content">
                    <RemainingChart />
                </div>
            </>
        )
    }

}

export default Remaining
