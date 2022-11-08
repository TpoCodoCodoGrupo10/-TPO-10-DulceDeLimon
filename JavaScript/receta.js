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
    
    document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1><img src='"+res.baseUri+res.results[0].image+"' width='200' /><br>Listo en tan solo "+res.results[0].readyInMinutes+" minutos"
    getsource(res.results[0].id)
    }
    });
    }
    