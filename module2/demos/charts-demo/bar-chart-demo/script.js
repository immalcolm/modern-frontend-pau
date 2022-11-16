//let's start our chart
//1. what kind of chart?
//2. define options for chart
//3. data for chart?
//4. UI for chart?
//5. which element to target

//keep chart data here
const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const chartData1 = [1000,490, 2003, 499, 939,93];
const chartData2 = [33,55, 523, 553, 535,35];

const options = {
    chart: {
        type: "bar",
        height: "100%"
    },
    //series of data
    //objects of data in array
    series: [
        {
            name: "Revenue 1",
            data: chartData1
        },
        {
            name: "Revenue 2",
            data: chartData2
        }
    ],
    plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
    xaxis:{
        categories: categories
    }

}

const divChart = document.querySelector("#chart");
const chart = new ApexCharts(divChart, options);

chart.render();