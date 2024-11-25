$(document).ready(function() {
    $('.head1').html("hiiii...! allll")
    $('.head1').css("background-color","grey")// single css property for
    let a=$('.head2')
    a.html("PRAGATI")
    a.css({ // for multiply css properties
        "color": "white",
        "background-color": "purple",
        "padding":"20px","margin": "20px",
        "text-align": "center",
        "font-size": "50px",
        "text-decoration": "underline"
    })

    $('#btn').click(function(){
        $('#para').slideUp(1000)
    })
    $('#btn1').click(function(){
        $('#para').slideDown(1000)
    })
    $('#btn2').click(function(){
        $('#para').slideToggle(1000)
    })
    $('#btn3').click(function(){
        $('#para').fadeIn(1000)
    })
    $('#btn4').click(function(){
        $('#para').fadeOut(1000)
    })
    $('#btn5').click(function(){
        $('#para').fadeToggle(1000)
    })
}

)