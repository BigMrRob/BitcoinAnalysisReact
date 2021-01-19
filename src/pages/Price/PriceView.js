import React from 'react'


export default class PriceView extends React.Component {
    state = {
        data: {},
        priceUSD: 0,
        timeStamp: '',
        error: null
    }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {                
                this.setState({
                    data: data,
                    timeStamp: data.time.updated,
                    priceUSD: data.bpi.USD.rate
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
            <div>
                {/*<pre>{JSON.stringify(data, null, 2)}</pre> */}
                <h1>Current Price: {`$${priceUSD}`}</h1>
                <h6>This was updated on: {timeStamp}</h6>
            </div>
        )
    }


}