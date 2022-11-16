//create the options for our pie chart
//thought process
//1. chart options
//2. what element to target
//3. render to test
//4. chart data to be included 
//5. enhance chart UI

const options = {
    chart: {
        type: "pie",
        height: "100%"
    },

    series: [33, 11, 48, 38, 28 ],

    //let's say each type of food category that people likes
    labels: ["Sushi", "Pizza", "Western", "Indian", "Chinese"],

    //let's upgrade our color schemes
    colors: ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"]
}//end of options 

const divChart = document.querySelector("#chart");
const chart = new ApexCharts(divChart, options);

chart.render();