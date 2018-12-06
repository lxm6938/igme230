$(document).ready(() => {
    $('.list').css("display", "none")

    let article0 = ("article0.txt")
    $('article').load(article0)
})

$('.top').on('click', function(){
    $(this).next().slideToggle()
})

$("input[type='radio'][name='story']").on('click', (el) => {
    if(el.target.value == "article1.txt"){
        let article1 = ("article1.txt")
        $('article').load(article1)
    }

    else{
        let article2 = ("article2.txt")
        $('article').load(article2)
    }
})