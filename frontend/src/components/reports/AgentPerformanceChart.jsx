 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AgentPerformanceChart = ({ data = [] }) => {
  const chartData = {
    labels: data.map((agent) => agent.name),
    datasets: [
      {
        label: "Closed Leads",
        data: data.map((agent) => agent.totalClosed),
        backgroundColor: "#5946d2",
        hoverBackgroundColor: "#4432b2",
        borderRadius: 7,
        borderSkipped: false,
        maxBarThickness: 28,
        barPercentage: 0.7,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#17182b",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: (context) => `Closed Leads: ${context.parsed.x}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          precision: 0,
          color: "#77798b",
          font: {
            size: 11,
          },
        },
        grid: {
          color: "#f0eef7",
          drawTicks: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          autoSkip: false,
          color: "#55566a",
          font: {
            size: 11,
            weight: "500",
          },
        },
      },
    },
  };

  const chartHeight = Math.max(220, data.length * 42);

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
      <div className="card-header bg-white border-0 px-3 px-md-4 pt-4 pb-2">
        <h5
          className="mb-1"
          style={{
            color: "#17182b",
            fontSize: "15px",
            fontWeight: "700",
          }}
        >
          Closed Leads by Agent
        </h5>

        <small style={{ color: "#77798b", fontSize: "12px" }}>
          Compare closed leads across your sales agents
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
              📈
            </div>

            <h6
              className="mb-1"
              style={{
                color: "#17182b",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              No agent performance data
            </h6>

            <small style={{ fontSize: "12px" }}>
              Agent statistics will appear here.
            </small>
          </div>
        ) : (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: `${chartHeight}px`,
            }}
          >
            <Bar data={chartData} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentPerformanceChart;
