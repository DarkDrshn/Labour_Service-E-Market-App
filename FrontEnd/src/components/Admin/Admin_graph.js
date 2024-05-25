import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { AdminSideBar } from "./Admin_sidebar";

function AdminGraph() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const monthlyBookings = [
    { month: "January", bookings: 10 },
    { month: "February", bookings: 20 },
    { month: "March", bookings: 15 },
    { month: "April", bookings: 25 },
    { month: "May", bookings: 18 },
    { month: "June", bookings: 22 },
    { month: "July", bookings: 28 },
    { month: "August", bookings: 30 },
    { month: "September", bookings: 16 },
    { month: "October", bookings: 23 },
    { month: "November", bookings: 19 },
    { month: "December", bookings: 27 },
  ];

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: monthlyBookings.map(item => item.month),
        datasets: [{
          label: "Monthly Bookings",
          data: monthlyBookings.map(item => item.bookings),
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false, // Allow chart to stretch to fit container
        indexAxis: 'y', // Display months on the y-axis
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              stepSize: 1, // Adjust the step size for x-axis ticks
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, [monthlyBookings]);

  return (
    <div className="flex">
    <AdminSideBar />
    <div className="graph-container" style={{ height: "500px", width: "100%" }}> {/* Adjust width to fill available space */}
      <h1 className="text-2xl font-bold mb-4">Monthly Bookings Graph</h1>
      <canvas ref={chartRef} />
    </div>
  </div>
  );
}

export default AdminGraph;
