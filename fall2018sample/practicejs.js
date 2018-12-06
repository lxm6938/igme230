$(document).ready(() => {
    $('.submenu').css("display", "none")

    let content1 = ("content1.txt")
    $('#content').load(content1)
})

$('.menuitem').on('click', function() {
    $(this).next().slideToggle()
})

$('#choose-content').on('change', (el) => {
    if(el.target.value == "content1.txt"){
        let content1 = ("content1.txt")
        $('#content').load(content1)
    }

    else{
        let content2 = ("content2.txt")
        $('#content').load(content2)
    }
})

