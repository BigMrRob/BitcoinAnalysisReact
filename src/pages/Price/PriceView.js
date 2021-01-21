import React from 'react'
import Chart from "react-google-charts";
import PriceHistory from '../../data/market-price'

let results = []
export default class PriceView extends React.Component {
    state = {
        price: {},
        priceUSD: 0,
        timeStamp: '',
        error: null,
        data: null
    }

    componentDidMount() {
        let results = [
            ['Time', 'Price'],
        ]

        let date = null
        for (let i = 0; i < PriceHistory.values.length; i=i+1) {
            date = new Date(PriceHistory.values[i].x * 1000)
            results.push([date, PriceHistory.values[i].y])
            
        }
        console.log(results)
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {                
                this.setState({
                    price: data,
                    timeStamp: data.time.updated,
                    priceUSD: data.bpi.USD.rate,
                    data: results
                })

            }
                
            )
            .catch((error) => {
                console.warn('Error Fetching Data: ', error)

                this.setState({
                    error: `There was an error fetching the API data for Bitcoin Price`
                })
            })
    }

    render() {
        const { priceUSD, timeStamp } = this.state
        
        return (
            <div className='center-content'>
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
                <div className="center-text">
                    <h1 className="chart-header">Current Price: {`$${priceUSD}`}</h1>
                    <br />
                    <h6>This was updated on: {timeStamp}</h6>
                </div>             
            </div>
        )
    }


}