Map = function(context, width, height, tileSize) {
    this.init(context, width, height, tileSize);
}

$.extend(Map.prototype, {
    // object variables
    context: null,
    tileSize: 5,
    tiles: [],
    w: null,
    h: null,
    numTiles: null,
    
    init: function(context, width, height, tileSize) {
	this.context = context;
	this.tileSize = tileSize;
	
	this.w = width/this.tileSize;
	this.h = height/this.tileSize;
	
	this.numTiles = this.w * this.h;
	for(var i=0; i<this.numTiles; i++) {
	    var w = i%this.w;
	    var h = Math.floor(i/this.w);
	    this.tiles.push(new Tile(w*this.tileSize, h*this.tileSize, 0, tileSize));
	}
    },
    
    draw: function() {
	for(var i=0; i<this.numTiles; i++) {
	    this.tiles[i].draw(this.context);
	}
    }
});