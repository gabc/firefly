function Ennemie () {
    this.x = Math.random() * 500;
    this.y = -10;

    this.yspeed = 1;

    this.element = document.createElement("div");
    this.element.className = "mechant";
    this.element.style.backgroundImage = "url(\"img/ship.png\")";

    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
    this.element.style.height = 122 + 'px';
    this.element.style.width = 45 + 'px';

    document.body.appendChild(this.element);
}

Ennemie.prototype.tick = function () {
    this.y += this.yspeed;

    this.element.style.top = this.y + "px";
    
    if (this.y < 600)	
	return true;
    else {
	this.element.style.backgroundColor = "black";
	return false;
    }
};
