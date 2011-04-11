
var x = null;
var y = null;
var xoff = null;
var yoff = null;

$(function() {
    xoff = $("#game-canvas").offset().left;
    yoff = $("#game-canvas").offset().top;

    var canvas = $("#game-canvas")[0];
    var context = $("#game-canvas")[0].getContext("2d");
    var tile = new Tile(50,20,0);
    context.fillRect(tile.x,tile.y, 20,20);

    var map = new Map(context, canvas.width, canvas.height, 20);
    map.draw();

    $("#game-canvas").mousemove(function(event) {
	context.clearRect(x-10, y-10, 20, 20);
	
	var msg = "Handler for .mousemove() called at ";
	x = (event.pageX-xoff);
	y = (event.pageY-yoff);
	msg += x + ", " + y;
	console.log(msg);
	
	context.drawImage(cat, x-10, y-10);
    });

    var cat = new Image();
    cat.src = "pics/knight-small.png";
    cat.onload = function() {
	context.drawImage(cat, 40, 100);
    };
    
    // 
    
});