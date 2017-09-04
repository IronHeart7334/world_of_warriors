// buggy, scrolling messes it up
function check_click(event){
	var x = event.clientX;
    var y = event.clientY;
    
    for (var button of active_buttons){
    	button.check_if_click(x, y);
    }
}

var active_buttons = [];
var canvas_width = 1000;

function Button(text, color, x, y, width, height, functions){
	this.text = text;
	this.color = color;
	this.x = x;
	this.y = y;
	this.w = width;
	this.h = height;
	this.functions = functions;
}
Button.prototype = {
	// change this to scale text based on length of this.text
	draw:function(){
		if (this.color !== "none"){
		    rect(this.color, this.x, this.y, this.w, this.h);
		    var t = new Text(10, "rgb(0, 0, 0)", this.x, this.y);
		    t.add(this.text);
		}
	},
	
	check_if_click:function(x, y){
	    var c = document.getElementById("canvas");
	    var tx = this.x / 100 * c.width;
	    var ty = this.y / 100 * c.height;
	    var tw = this.w / 100 * c.width;
	    var th = this.h / 100 * c.height;
	    
		if (x >= tx && x <= tx + tw && y >= ty && y <= ty + th){
			for (var f of this.functions){
				f();
			}
		}
	}
}