var input=$("input[type=text]") ;
//attachListeners();

input.keypress(function(event){
    if(event.which===13){
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span>"+input.val()+"</li>");
        //attachListeners();
        input.val("");
    }
})

// function attachListeners(){
    
//     $("li").on("click",function(){
//         $(this).toggleClass("cutText") ;
//     }) 

//     $("span").on("click",function(){
//         $(this).parent().fadeOut(500,function(){
//             $(this).remove();
//         })
//     })  
// }

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$(".fa-plus").on("click",function(){
    input.fadeToggle("800");
})

$("ul").on("click","li",function(){
    $(this).toggleClass("cutText") ;
})