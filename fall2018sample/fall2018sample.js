// Document loaded
$(document).ready(() => {
    // Start by hiding the sliding menus
    $('.submenu').css("display", "none")

    // Start by loading the first text file into the #content div
    let content1 = ("content1.txt") // Load text 1
    $('#content').load(content1) // Put the text into the div
})

// WHen the content menu is changed
$('#choose-content').on('change', (el) => {

    // Determine which menu item was clicked
    if (el.target.value == "content1.txt") {
        let content1 = ("content1.txt")
        $('#content').load(content1)
    } else {
        let content2 = ("content2.txt")
        $('#content').load(content2)
    }
})

// When a menu header is clicked
$('.menuitem').on('mouseenter', function () {
    // Slide toggle the next element
    $(this).next().slideToggle()
})