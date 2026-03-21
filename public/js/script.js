window.addEventListener("load", function () {
  const ctx = document.getElementById("skillsChart");

  if (!ctx) return;

  const skillData = [
    { label: "HTML", value: 20, color: "#E34F26" },
    { label: "CSS", value: 15, color: "#264DE4" },
    { label: "JavaScript", value: 20, color: "#F7DF1E" },
    { label: "React", value: 15, color: "#61DBFB" },
    { label: "PHP", value: 15, color: "#777BB4" },
    { label: "MySQL", value: 15, color: "#00758F" },
  ];

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: skillData.map((s) => s.label),
      datasets: [
        {
          data: skillData.map((s) => s.value),
          backgroundColor: skillData.map((s) => s.color),
          borderColor: "#fff",
          borderWidth: 2,
          hoverOffset: 15,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },

        // 🔥 THIS IS THE IMPORTANT PART
        datalabels: {
          color: document.body.classList.contains("dark-mode")
            ? "#fff"
            : "#000", // text color inside chart
          font: {
            weight: "bold",
            size: 14,
          },
          formatter: (value, context) => {
            const label = context.chart.data.labels[context.dataIndex];

            const total = context.chart.data.datasets[0].data.reduce(
              (a, b) => a + b,
              0,
            );

            const percentage = ((value / total) * 100).toFixed(0);

            return `${label}\n${percentage}%`; // label + percentage
          },
          anchor: "center",
          align: "center",
        },
      },
    },

    plugins: typeof ChartDataLabels !== "undefined" ? [ChartDataLabels] : [],
  });
});
