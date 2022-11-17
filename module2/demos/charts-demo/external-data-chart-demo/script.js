
window.addEventListener('DOMContentLoaded', async ()=>{
    //we can only call load data if the function is already is the global scope 
  
    let series = await loadData();
      chart.updateSeries([{
          'name': 'Sales',
          'data': series.yearly
      }])
  })
  
  document.querySelector("#btnLoad").addEventListener('click', async function(e){
    console.log(`load btn`);
    let series = await loadData();
      chart.updateSeries([{
          'name': 'Sales',
          'data': series.yearly2
      }])
    
  });
  
  //charting options
  const options = {
    chart: {
      type: "line",
      height: "100%"
    },
    series: [
  
    ]
    , noData: {
    text: "Loading..."
    }
  }
  
  //select a target to place our chart
  const chart = new ApexCharts(document.querySelector("#chart"), options);
  
  //render chart
  chart.render();