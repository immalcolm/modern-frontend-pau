//our sample case now is about aliens
//thought process
//1. define the options for our chart
//2. start by defining the chart we want to use
//3. next define the data involved
//4. define the xaxis/categories involved 
//5. identify which HTML to target and display the chart
//6. Create our chart by calling apex charts
//
const lineChartOptions = {
    chart: {
      type: "line",
      height: "100%",
    },
  
    title: {
      text: 'Sightings',
    },
    //data is called series in apex charts
    //we are setting the Y axis /data involved
    //we can multiple series/data
    series: [
      {
        name: "sightings",
        data: [10, 13, 48, 58, 19, 88],
      },
  
      {
          name: "temperature",
          data: [38, 33, 28, 4, 39, 2],
        },
    ],
  
    //setup our xaxis
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  }; //end of options
  
  const divLineChart = document.querySelector("#line-chart");
  
  //new ApexCharts(<element to target>, <chartOptions>)
  const lineChart = new ApexCharts(divLineChart, lineChartOptions);
  
  lineChart.render();