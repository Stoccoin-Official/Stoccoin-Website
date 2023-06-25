import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,  
    registerables} from 'chart.js'

    ChartJS.register( CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend )
const Chart = ({arr=[],currency,days}) => {
    const prices=[];
    const date=[];
    for(let i=0;i<arr.length;i++){
        if(days==="24hr"){
            date.push( new Date(arr[i][0]).toLocaleTimeString());
        }
        else{
            date.push( new Date(arr[i][0]).toLocaleDateString());
        }
        prices.push(arr[i][1]);
    }

  return (
    <div>Chart
        <Line
        options={{
            responsive:true
        }}
        data={{
            labels:date,
            datasets:[{
                label:`price in ${currency}`,
                data:prices,borderColor:"rgb(255,99,132)",
                backgroundColor:"rgba(255,99,132,0.5)"
            }]
        }}
        />
    </div>
  )
}

export default Chart