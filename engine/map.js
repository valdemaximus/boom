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
	var d = Math.floor(this.tileSize/2);
	for(var i=0; i<this.numTiles; i++) {
	    var w = i%this.w;
	    var h = Math.floor(i/this.w);
	    this.tiles.push(new Tile(w*this.tileSize+d, h*this.tileSize+d, 0));
	    console.log(w+","+h);
	}
    },
    
    draw: function() {
	for(var i=0; i<this.numTiles; i++) {
	    this.tiles[i].draw(this.context);
	}
    }
});