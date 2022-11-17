async function loadData(){
    const response = await axios.get('data.json');
    return response.data;
  }
  
  //without async
  //test this out
  function loadData2(){
    const response =  axios.get('data.json');
    return response.data;
  }
  