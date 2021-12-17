import Chart from "chart.js/auto";

export const renderChart = (node, options) => {
  const _chart = new Chart(node, options);
  console.log("renderchart connected");

  return {
    update(updatedData) {
      _chart.data = updatedData.data;

      _chart.update();
    },
    destroy() {
      _chart.destroy();
    },
  };
};
