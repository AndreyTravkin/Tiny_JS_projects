// Check off to-do by clicking on it

// $('li').click(function(){
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     } else {
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }   
// });

$('ul').on("click", 'li', function(){
   $(this).toggleClass("completed");
});

// click on X to delete to-do

$('ul').on("click", "span", function(e) {
    $(this).parent().fadeOut(600, function() {
        $(this).remove(); 
    });
    e.stopPropagation();
})


$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
      let todoText = $(this).val();
      $(this).val("");

      $('ul').append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})