var options = {
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: "40%",
    },
  },
  colors: ["#00EC42", "#FF2E2E"], // Green for profit, red for loss
  series: [
    {
      name: "Profit",
      data: [3500, 4500, 3200], // Data for different time periods (week, month, day)
    },
    {
      name: "Loss",
      data: [1200, 2000, 800], // Loss values for week, month, day
    },
  ],
  xaxis: {
    categories: ["This Week", "This Month", "Today"], // Time periods
    title: {
      text: "Time Periods",
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#333",
      },
    },
  },
  yaxis: {
    title: {
      text: "Amount ($)",
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#333",
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$" + val.toFixed(2);
      },
    },
  },
  title: {
    text: "Profit and Loss for Selected Time Period",
    align: "center",
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#333",
    },
  },
  grid: {
    borderColor: "#f1f1f1",
    strokeDashArray: 4,
  },
};

var chart = new ApexCharts(
  document.querySelector("#profit-loss-bar-chart"),
  options
);
chart.render();
