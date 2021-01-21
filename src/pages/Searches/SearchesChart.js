import React from 'react'
import GoogleSearches from '../../data/google-searches'
import Chart from "react-google-charts";

class SearchesChart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    componentDidMount() {

        let results = []
        results.push(['Time', 'Google Search Index'])
        let date = null
        for (let i = 0; i < GoogleSearches.length; i++) {
            date = new Date(GoogleSearches[i].Month).getTime()
            
            if (date > 1223086800000) {
                results.push([new Date(date), GoogleSearches[i]['bitcoin: (Worldwide)']])
            }
            
        }
        
        this.setState({
            data: results
        })
    }
    render() {
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
                        title: 'Google Search Index',
                        },
                        series: {
                        1: { curveType: 'function' },
                        },
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />                

            </div>
        )
    
    }
}

export default SearchesChart
