function Etoile (n) {
    this.x = Math.random() * 500;
    this.y = -10 * n;

    this.taille = Math.random() * 5;
    this.yspeed = this.taille;

    this.size = this.taille * 3;

    this.element = document.createElement("div");
    this.element.className = "etoile";
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
    this.element.style.height = this.size + 'px';
    this.element.style.width = this.size + 'px';

    document.body.appendChild(this.element);
}

Etoile.prototype.tick = function () {
    this.y += this.yspeed;

    this.element.style.top = this.y + "px";
    
    if (this.y < 600)	
	return true;
    else {
	this.element.style.backgroundColor = "black";
	return false;
    }
};

