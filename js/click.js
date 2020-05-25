$(document).ready(function (showapi) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://recipe-puppy.p.rapidapi.com",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
            "x-rapidapi-key": "fcabac1303msh4fe4fd367609401p1779a0jsncaaef6c802db",


        },
        data: {
            // q : $('#searchinput').val(),
            p: ("1")
        }

    }

    $.ajax(settings).done(function (response) {
        let ambil = JSON.parse(response);
        let obj = ambil.results;
        // console.log(obj);

        $.each(obj, function (i, pilih) {
            $('#boxitem').append(
                '<div class="boxperitem" id="boxperitem"><div class="grid1" style="background-image: url(' + pilih.thumbnail + ')"><p>' + i + 'min</p></div> <div class="grid2" ><h2>' + pilih.title + '</h2><div class="spn-1"><div class="div1"> <span><i class="fas fa-heart"></i></span><span><i class="fas fa-comment"></i></span></div><div class="div2"><span class=view><a class=view href="' + pilih.href + '">Details</a></span> </div> </div></div></div>'
            );
            return i < 7;
        })

    });

});



$(document).ready(function (showonclick) {


    $('#searchbtn').click(function () {


        let ambil = {
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
                q: $('#searchinput').val()

            },
        }
        $('#boxitem').empty();
        $.ajax(ambil).done(function (cari) {
            // $('#searchinput').val(),
            let obj = cari.results;
       
            console.log(obj.length);
            // console.clear();
            if (obj.length == 0) {
                $('#boxitem').html(
                    `       <h1 style="margin: auto; width:100%; text-align:center">Not found</h1>`
                )
            }
         
         
            // console.log(obj);


            $.each(obj, function (i, pilih) {
                $('#boxitem').append(
                    '<div class="boxperitem" id="boxperitem"><div class="grid1" style="background-image: url(' + pilih.thumbnail + ')"><p>' + i + 'min</p></div> <div class="grid2" ><h2>' + pilih.title + '</h2><div class="spn-1"><div class="div1"> <span><i class="fas fa-heart"></i></span><span><i class="fas fa-comment"></i></span></div><div class="div2"><span class=view><a class=view href="' + pilih.href + '">Details</a></span> </div> </div></div></div>'
                );

            });


        });

    });

    let x = 1;
    $('#iconbot').click(function () {


        x++;

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

        //    console.log(x)
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

    });
});
