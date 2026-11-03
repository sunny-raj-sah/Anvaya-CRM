 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const ClosedLastWeekChart = ({ data = [] }) => {
  const chartData = {
    labels: data.map((lead) =>
      new Date(lead.closedAt).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Closed Leads",
        data: data.map(() => 1),
        borderColor: "#5946d2",
        backgroundColor: "#5946d2",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#5946d2",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#4432b2",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
        borderWidth: 2.5,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#17182b",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: () => "Closed Leads: 1",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#77798b",
          maxRotation: 45,
          minRotation: 0,
          autoSkip: true,
          maxTicksLimit: 6,
          font: {
            size: 10,
          },
        },
      },
      y: {
        beginAtZero: true,
        border: {
          display: false,
          dash: [4, 4],
        },
        grid: {
          color: "#f0eef7",
        },
        ticks: {
          stepSize: 1,
          precision: 0,
          color: "#77798b",
          font: {
            size: 11,
          },
        },
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
      <div className="card-header bg-white border-0 px-3 px-md-4 pt-4 pb-2">
        <h5
          className="mb-1"
          style={{
            color: "#17182b",
            fontSize: "15px",
            fontWeight: "700",
          }}
        >
          Closed Last Week
        </h5>

        <small style={{ color: "#77798b", fontSize: "12px" }}>
          Overview of leads closed during the last week
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
              📉
            </div>

            <h6
              className="mb-1"
              style={{
                color: "#17182b",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              No closed leads available
            </h6>

            <small style={{ fontSize: "12px" }}>
              Recently closed leads will appear here.
            </small>
          </div>
        ) : (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "260px",
            }}
          >
            <Line data={chartData} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ClosedLastWeekChart;
