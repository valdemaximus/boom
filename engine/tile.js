Tile = function(x, y, z) {
    this.init(x,y,z);
}

$.extend(Tile.prototype, {
    // object variables
    x: null,
    y: null,
    z: null,
    
    init: function(x,y,z) {
	// do initialization here
	this.x = x;
	this.y = y;
	this.z = z;
    },
    
    draw: function(context) {
	context.fillRect(this.x,this.y, 1,1);
    }
});