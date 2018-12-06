$(document).ready(() => {
    $('.list').css("display", "none") //hiding submenus on load

    let article0 = ("article0.txt") //loading article0 on load
    $('article').load(article0)
})

$('.top').on('click', function(){ //when a menu is clicked
    $(this).next().slideToggle() //slide the submenu out
})


$("input[type='radio'][name='story']").on('click', (el) => { //when a radio button is clicked
    if(el.target.value == "article1.txt"){ //if the value is article 1
        let article1 = ("article1.txt") //load article1.txt into the article
        $('article').load(article1)
    }

    else{
        let article2 = ("article2.txt") //for anything else (the other radio button)
        $('article').load(article2) //load article2.txt into article
    }
})