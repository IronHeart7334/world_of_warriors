import {GuiElement} from "./guiElement.js";

export class Button extends GuiElement{
    constructor(text=""){
        super();
        this.text = text;
        this.color = "black";
    }
    
    setText(text){
        this.text = text;
    }
    
    setColor(color){
        this.color = color;
    }
    
    draw(canvas){
        canvas.setColor(this.color);
        canvas.rect(this.x, this.y, this.w, this.h);
        canvas.setColor("black");
        canvas.text(this.x, this.y, this.text);
    }
}