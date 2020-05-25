
   function notactive (){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (Conectjson){
    if(xhr.readyState == 4 && xhr.status == 200){
        let ambil = JSON.parse(this.responseText);
    
        let s  = ambil.results
        
    
          for(var i=0;i<s.length;i++){
            
            x = s[i];
            console.log(x);
            // document.getElementById("boxperitem").innerHTML += x.title + '<br>' ;
            document.getElementById("boxitem").innerHTML +=       
            '<div class="boxperitem" id="boxperitem"><div class="grid1"><img src="'+x.thumbnail +' " alt=""></div><div class="grid2" ><h2>'+ x.title +'</h2><div class="recipes-text"><p>Recipes</p><p> '+ x.ingredients+'</p></div><div><span><i class="fas fa-heart"></i></span><span><i class="fas fa-heart"></i></span><a class=view href="">View</a></div></div></div>'
    
          
        }
                
        }
    }
    
    
    xhr.open("GET", "https://recipe-puppy.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-host", "recipe-puppy.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "fcabac1303msh4fe4fd367609401p1779a0jsncaaef6c802db");
    
    xhr.send();
    
 
   }

   


    
  
  