import { Radar } from 'react-chartjs-2';

const RadarChart = ({chartData, options}) => {
  return <Radar data={chartData} options={options}/>
}

export default RadarChart