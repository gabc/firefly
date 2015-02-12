function Shot (x, y) {
    this.x = x;
    this.y = y;
    this.yspeed = 2;

    this.element = document.createElement("div");
    this.element.className = "shot";
    this.element.style.height = 10 + 'px';
    this.element.style.width = 10 + 'px';
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';

    document.body.appendChild(this.element);
}

Shot.prototype.tick = function () {
    this.y -= this.yspeed;

    this.element.style.top = this.y + "px";
    
    if (this.y > 0)
	return true;
    else {
	this.element.style.backgroundColor = "black";
	return false;
    }
}
