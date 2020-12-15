canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color = "blue";
width_of_line = 3;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line");
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";   
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + ", y = " + last_position_of_y);
        ctx.moveTo(last_position_of_y, last_position_of_x);
        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + ", y = " + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_Y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_Y;
}
function clear_area(){
    ctx.clearRect(0, 0, ctx.canvas.width, canvas.height);
}