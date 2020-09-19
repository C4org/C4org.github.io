window.onload = function () {
  let clubs = {'Poolesville HS Chapter':'39.14907,-77.41568','Damascus HS Chapter':'39.28166,-77.21109'}
  let links = {'Poolesville HS Chapter':'/poolesville', 'Damascus HS Chapter':'/damascus'}
  let ps = placeSearch({
    key: 'e9mLNW2xSq0eXliSPLmNpGNrM8Ily3GB',
    container: document.querySelector('#search-input'),
    useDeviceLocation: true,
    collection: [
      'poi',
      'address',
    ],
    useDeviceLocation: true,
    limit: 5
  });
  ps.on('change', (e) => {
    console.log(e);
    L.mapquest.key = 'e9mLNW2xSq0eXliSPLmNpGNrM8Ily3GB';
    let new_location = [e.result.searchAheadResult]

    var directions = L.mapquest.directions();
    directions.routeMatrix({
      'locations': new_location.concat(Object.values(clubs)),
      'options': {
      }
    }, routeMatrixCallback);

    function routeMatrixCallback(error, response) {
      console.log(response)
      let vals = [...Array(Object.keys(clubs).length).keys()].map(function(i){
        return [Object.keys(clubs)[i],response.distance.slice(1)[i]]
      })
      vals.sort(function(first,second){
        return first[1] - second[1]
      })
      o = document.getElementById('outputDiv')
      o.innerHTML = ""
      for (i=0; i <vals.length;i++){
        o.innerHTML += "<div class='my-2' data-aos='fade-up' data-aos-offset='-400' data-aos-delay='"+i*100+"' data-aos-duration='500' data-aos-easing='ease-in-out' data-aos-mirror='true' data-aos-once='true' data-aos-anchor='#outputDiv' data-aos-anchor-placement='top-center' style='text-align:center;'><a class='location-link' href=chapters"+links[vals[i][0]]+"/><b>"+vals[i][0]+" - "+vals[i][1]+" miles away</b> </a></div>"
      }
      console.log(vals);
      console.log(clubs[response.distance.indexOf(Math.min.apply(null,response.distance.slice(1)))-1]);
    }
  });

  ps.on('clear',(e)=>{
    o.innerHTML = "<p class='subtext' style='text-align: center;'> Search something to see locations </p>"
  })

};

