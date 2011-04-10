
$(function() {
    var canvas = $("#game-canvas")[0];
    var context = $("#game-canvas")[0].getContext("2d");
    var tile = new Tile(50,20,0);
    context.fillRect(tile.x,tile.y, 10,10);

    var map = new Map(context, canvas.width, canvas.height, 10);
    map.draw();
});