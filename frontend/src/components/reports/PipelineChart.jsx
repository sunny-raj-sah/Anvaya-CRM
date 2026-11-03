 
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PipelineChart = ({ data = [] }) => {
  const chartColors = [
    "#5946d2",
    "#8b78e8",
    "#b5a8f5",
    "#4432b2",
    "#d8d0ff",
  ];

  const chartData = {
    labels: data.map((item) => item.status),
    datasets: [
      {
        data: data.map((item) => item.count),
        backgroundColor: chartColors,
        borderColor: "#ffffff",
        borderWidth: 3,
        hoverOffset: 7,
        borderRadius: 4,
        spacing: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "68%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#55566a",
          boxWidth: 10,
          boxHeight: 10,
          padding: 16,
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 11,
            family: "inherit",
          },
        },
      },
      tooltip: {
        backgroundColor: "#17182b",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
      },
    },
  };

  return (
    <div
      className="card h-100 w-100"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #eeedf5",
        borderRadius: "14px",
        boxShadow: "0 2px 10px rgba(23, 24, 43, 0.04)",
      }}
    >
      {/* Header */}
      <div
        className="card-header bg-white border-0 px-3 px-md-4 pt-4 pb-2"
        style={{ borderRadius: "14px 14px 0 0" }}
      >
        <h5
          className="mb-1"
          style={{
            color: "#17182b",
            fontSize: "15px",
            fontWeight: "700",
          }}
        >
          Pipeline by Status
        </h5>

        <small style={{ color: "#77798b", fontSize: "12px" }}>
          Distribution of leads across different stages
        </small>
      </div>

      {/* Chart Body */}
      <div className="card-body p-3 p-md-4">
        {data.length === 0 ? (
          <div
            className="d-flex flex-column justify-content-center align-items-center text-center"
            style={{
              minHeight: "260px",
              color: "#77798b",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#f0edff",
                color: "#5946d2",
                fontSize: "21px",
              }}
            >
              📊
            </div>

            <h6
              className="mb-1"
              style={{
                color: "#17182b",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              No pipeline data available
            </h6>

            <small style={{ fontSize: "12px" }}>
              Lead statistics will appear here.
            </small>
          </div>
        ) : (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "280px",
            }}
          >
            <Doughnut data={chartData} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PipelineChart;
