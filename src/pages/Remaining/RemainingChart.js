import React, { Component } from 'react';
import Data from '../../data/remaining-coins'
import Chart from "react-google-charts";
import PriceHistory from '../../data/market-price'

let result = []

export default class RemainingChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }

    }

    componentDidMount() {
        result = [
            ['Time', 'Remaining Coins']
        ]

        console.log(Data.values[0].x)
        
        let date = null
        let years = 0
        for(let i = 0; i < PriceHistory.values.length; i=i+1) {
            date = new Date(Data.values[i].x * 1000)
            console.log(new Date(1442534400*1000))
            
            result.push([date, 21000000-Data.values[i].y])
        }
        this.setState({
            data: result
        })

        
    }
    render() {
        return (
            <div>
               <Chart
                width={'940px'}
                height={'600px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={this.state.data}
                options={{
                    hAxis: {
                      title: 'Time',
                    },
                    vAxis: {
                      title: 'Remaining Coins',
                    },
                    series: {
                      1: { curveType: 'function' },
                    },
                  }}
                  rootProps={{ 'data-testid': '2' }}
                />                
            </div>
        );
    }
}