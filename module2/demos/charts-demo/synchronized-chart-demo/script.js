//lets have a case study on charts
//Example: in a marketing campaign
//there's campaigns and reach
//campaigns -> the number of campaigns launch
//reach -> the number of people see my campaign
//process
//1. upgrade chartoptions to seperate into reach & campaigns
//2. create 2 charts
//3. synchronize both of them

//each month of campaigns 
const campaigns = [3, 5, 1, 5, 8 , 4 ];
const reach = [5000, 1000, 4888, 8329, 9599, 1499];
const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

//let's plot them
const campaignChartOptions = {
    chart: {
        type: "line",
        height: "100%",
        id: "campaign", //chart identifier, no relation to css id
        group: "campaign-reach-compare"
    },
    series:[
        {
            name: "Campaigns",
            data: campaigns
        }
    ],
    xaxis:{
        categories: categories
    }
}

const campaignChart = new ApexCharts(document.querySelector("#campaign-chart"), campaignChartOptions);
campaignChart.render();

//let's plot them
const reachChartOptions = {
    chart: {
        type: "line",
        height: "100%",
        id: "reach", //chart identifier, no relation to css id
        group: "campaign-reach-compare"
    },
    series:[
        {
            name: "Reach",
            data: reach
        }
    ],
    xaxis:{
        categories: categories
    }
}
const reachChart = new ApexCharts(document.querySelector("#reach-chart"), reachChartOptions);
reachChart.render();