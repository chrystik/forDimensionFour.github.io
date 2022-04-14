import '../css/style.css'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

import birds from '../birdNumber'


function Dashboard() {

    return(
        <div className="page">
            <h2>Last 10 values</h2>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={birds}>
                    <CartesianGrid />
                    <XAxis dataKey="index" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="birdNumber"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Dashboard