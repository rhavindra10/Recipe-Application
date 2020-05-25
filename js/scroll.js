$(document).ready(function (scroll) {
    let s = 0;
    let x = 1;
    

 
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
     
        if (wScroll > $('#contact').offset().top - 300 ) {
     
       
            setTimeout(function(){
          
            $("#loading").html(`    <div class="loader"></div>`);
        }, );

           


            setTimeout(function(){
                s =  1;
                x = x + s;
                console.log(x);
                let data = {
                    "async": true,
                    "crossDomain": true,
            
                    url: "https://recipe-puppy.p.rapidapi.com/",
                    // url: "https://recipe-puppy.p.rapidapi.com/",
                    method: "GET",
                    dataType: "json",
                    "headers": {
                        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
                        "x-rapidapi-key": "fcabac1303msh4fe4fd367609401p1779a0jsncaaef6c802db",
            
                    },
                    data: {
                        p: (x)
            
                    },
                }
                $.ajax(data).done(function (cari) {
                    // $('#searchinput').val(),
                  
                    let obj = cari.results;
         
                    //    console.log(obj);
        
                    let second = 0;
                    $.each(obj, function (i, pilih) {
                        $('#boxitem').append(
                            `<div class="boxperitem" id="boxperitem">
                           <div class="grid1" style="background-image: url(` + pilih.thumbnail + `)"><p>` + second + ` min</p></div> <div class="grid2" ><h2>` + pilih.title + `</h2><div class="spn-1"><div class="div1"> <span><i class="fas fa-heart"></i></span><span><i class="fas fa-comment"></i></span></div><div class="div2"><span class=view><a class=view href="` + pilih.href + `">Details</a></span> </div> </div></div></div>
                           `
                        );});
        
        
                });
        }, 0);
           
         

        } else {
            s = 0
            $("#loading").empty();
         
        }
      

    });

});

$(document).ready(function () {
   $(window).scroll(function () { 
    var wScroll = $(this).scrollTop();
    console.log(wScroll)
        if(wScroll > 40){
        $('#top-button').fadeIn();
        }
        else{
            $('#top-button').fadeOut();
        }
   });
$('#top-button').click(function () { 
    $('html, body').animate({scrollTop : 0},800);
   
});

  
   
    
});
