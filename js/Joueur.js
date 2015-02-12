function Joueur () {
    this.x = 0;
    this.y = 0;

    this.xspeed = 10;
    
    this.element = document.createElement("div");
    this.element.className = "joueur";
    this.element.style.backgroundImage = "url(\"img/firefly.png\")";
    this.element.style.left = this.x + 'px';

    this.element.style.height = 90 + 'px';
    this.element.style.width = 80 + 'px';

    
    document.body.appendChild(this.element);
}

Joueur.prototype.move = function (n) {
    if (n < 0)
	this.x -= this.xspeed;
    else
	this.x += this.xspeed;

    this.element.style.left = this.x + 'px';
};

Joueur.prototype.shot = function () {
    shots.push(new Shot(this.x, 500));
};
