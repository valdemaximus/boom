Tile = function(x, y, z, size) {
    this.init(x,y,z, size);
}

$.extend(Tile.prototype, {
    // object variables
    x: null,
    y: null,
    z: null,
    size: null,
    
    init: function(x,y,z, size) {
	// do initialization here
	this.x = x;
	this.y = y;
	this.z = z;
	this.size = size;
    },
    
    draw: function(context) {
	var d = Math.floor(this.size/2);
	context.fillRect(this.x+d,this.y+d, 1,1);
    }
});