window.addEventListener('load',()=>{
    let lon
    let lat
    let temperaturaValor= document.getElementById('temperatura-valor')
    let temperaturaDescripcion= document.getElementById('temperatura-descripcion')
    let ubicacion= document.getElementById('ubicacion')
    let icono= document.getElementById('icono')
    let vientoVelocidad= document.getElementById('viento-velocidad')
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            //ciudad actual
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=43feb3099e899730f49367c5928432e1`
            
           //elegir ciudad 
           //const url= 'https://api.openweathermap.org/data/2.5/weather?q=Argentina,ARG&lang=es&units=metric&appid=43feb3099e899730f49367c5928432e1'
             
           fetch(url)
           .then(response => {return response.json()})
           .then(data=>{
            console.log (data.main.temp)
            let temp=Math.round(data.main.temp)
            temperaturaValor.textContent=`${temp}°C`

            let desc=data.weather[0].description
            temperaturaDescripcion.textContent=`${desc}`

            ubicacion.textContent = data.name
            vientoVelocidad.textContent=`${data.wind.speed}m/s`

            console.log (data.weather[0].icon)
            let iconCode = data.weather[0].icon
            const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
            console.log (urlIcon)
            icono.src = urlIcon
           })
           .catch(error=>{
            console.log(error)
           })
        })
    }
})

function getsource(id){
    $.ajax({
    url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=ddfef96feb36470cae0c55b3d9336155",
    success: function(res) {
    
    document.getElementById("sourceLink").innerHTML=res.sourceUrl
    document.getElementById("sourceLink").href=res.sourceUrl
    }
    });
    }
    function getrecepe(q){
    $.ajax({
    url:"https://api.spoonacular.com/recipes/search?apiKey=ddfef96feb36470cae0c55b3d9336155&lang=es&number=1&query="+q,
    success: function(res) {
    
    document.getElementById("output").innerHTML="<h3>"+res.results[0].title+"</h3><img src='"+res.baseUri+res.results[0].image+"' width='200' /><br>Listo en tan solo "+res.results[0].readyInMinutes+" minutos"
    getsource(res.results[0].id)
    }
    });
    }
    