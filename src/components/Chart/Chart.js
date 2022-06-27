import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximumAmount = [...dataPointValues].reduce((a,b) => a + b, 0);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximumAmount}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
