
 var html = "<table border='1|1' class='table table-striped' width='80%'>";
  html+="<tr><th>Name</th><th>Rotation period</th><th>Orbital Period</th><th>Diameter</th><th>Climate</th><th>Gravity</th><th>Terrain</th><th>Surface Water</th> </tr>";
    for (var i = 0; i < swapi.results.length; i++) {
        html+="<tr>";
        html+="<td>"+swapi.results[i].name+"</td>";
        html+="<td>"+swapi.results[i].rotation_period+"</td>";
        html+="<td>"+swapi.results[i].orbital_period+"</td>";
        html+="<td>"+swapi.results[i].diameter+"</td>";
        html+="<td>"+swapi.results[i].climate+"</td>";
        html+="<td>"+swapi.results[i].gravity+"</td>";
        html+="<td>"+swapi.results[i].terrain+"</td>";
         html+="<td>"+swapi.results[i].surface_water+"</td>";
          
        
        html+="</tr>";

    }
    html+="</table>";
document.getElementById("box").innerHTML = html;
console.log(swapi.results)
console.log(html)