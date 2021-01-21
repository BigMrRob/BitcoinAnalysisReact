import React from 'react'
import DifficultyData from '../../data/difficulty'
import Chart from "react-google-charts";

class DifficultyChart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        
        let result = []
        result.push(['Time', 'Relative Difficulty'])

        for (let i = 0; i < DifficultyData.values.length; i++) {
            result.push([new Date(DifficultyData.values[i].x * 1000) , DifficultyData.values[i].y])
        }

        console.log(result)

        this.setState({
            data: result
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
                      title: 'Difficulty',
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

export default DifficultyChart
