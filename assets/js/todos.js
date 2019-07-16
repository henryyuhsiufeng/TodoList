//Check Off Specific Todos By Clicking
//on method explanation: only runs when an li inside ul is clicked
$("ul").on("click","li",function () {
    //$(this).css("color","gray");
    //$(this).css("text-decoration","line-through");

    //if li is gray, then turn it black
    //.css("color") returns rgb code not the color name
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // }
    // //else turn it gray
    // else {
    //     $(this).css({
    //         color: "gray",
    //         //Can't have property names with hyphens in them. Use camel case.
    //         textDecoration: "line-through"
    //     });
    // }

    $(this).toggleClass("completed");
});

//Click on X to delete Todos
//Try to avoid event bubbling by passing in event and calling .stopPropagation();
//on method explanation: only runs when a span inside ul is clicked
$("ul").on("click","span",function(event){
    //this: the span we click on, parent: gives us the li, remove: removes the whole li
    //without including parent, it will only remove the span. 
    $(this).parent().fadeOut(500,function(){
        //refers to the li now, not the span
        $(this).remove();
    });
    event.stopPropagation();
});

//Adding in new todos
$("input[type='text']").keypress(function(event){
    //code for enter key is 13
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        //removes user input after entering 
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});

