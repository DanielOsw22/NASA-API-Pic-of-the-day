$('#enviar').bind('click', () => { Rodar()})
$('h3').css("display","none")
$('h1').css("display","none")

function Rodar() {
    var inputData = $("#datainput")[0]
    console.log(inputData)

    $.ajax({
        url: ("https://api.nasa.gov/planetary/apod?api_key=6Arlw2XEkJUOD4Rbe1CHvSonwf8JiuzRuR6sbFMz" + "&date=" + inputData.value),
        success: function (result) {
            console.log(result)
            getPic(result)
        }
    }); 
}
 

function getPic(n) {
    var linkimg = n.url
    var tipomedia = JSON.stringify(n.media_type)
    console.log(tipomedia)

    $('h1').css("display","block")
    $('h1').html(n.title)
    
    $('h3').css("display","block")
    $('h3').html(n.explanation)

    if (tipomedia === "\"image\"") {
        $("iframe").css("display", "none")
        $("img").attr("src", linkimg)
        $("img").css("display", "block")
    }
    else{
        $("img").css("display", "none")
        $("iframe").attr("src", linkimg);
        $("iframe").css("width", "640px")
        $("iframe").css("height", "480px")
        $("iframe").css("display", "block")
    }
}