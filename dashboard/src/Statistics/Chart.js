import React, { Component, Fragment } from 'react';
import {Bar} from 'react-chartjs-2';

export default class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData
        }
        console.log(this.props);
    }
    
    render(){
        return (
          <div className="chart">
            <Bar
              data={this.state.chartData}
            />
          </div>
        )
      }
}