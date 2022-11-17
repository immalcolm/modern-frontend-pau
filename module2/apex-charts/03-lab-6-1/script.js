const DATA_URL =
  "https://raw.githubusercontent.com/immalcolm/data-and-misc/main/data-graph.json";
//setup options
const options = {
  chart: {
    type: "scatter", //cos line doesnt make any sense
    height: "100%",
  },
  series: [],
  noData: {
    text: "loading....",
  },
};

async function loadData() {
  const response = await axios.get(DATA_URL);
  console.log(response.data);

  //dont forget to return some info back to our function call
  return response.data;
}

window.addEventListener("DOMContentLoaded", async function () {
  let series = await loadData();
  chart.updateSeries([{ name: "Temp", data: series.temperatures }]);
});

const divChart = document.querySelector("#chart");
const chart = new ApexCharts(divChart, options);

chart.render();
