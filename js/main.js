window.onload = debut;
var etoiles = [];
var joueur = null;
var mechants = [];
var shots = [];

function tick () {
    for (var i = 0; i < etoiles.length; i++) {
	if (!etoiles[i].tick()){
	    etoiles.splice(i, 1);
	    i--;
	}
    }
    for (i = 0; i < mechants.length; i++) {
	if (!mechants[i].tick()){
	    mechants.splice(i, 1);
	    i--;
	}
    }
    for (i = 0; i < shots.length; i++) {
	if (!shots[i].tick()){
	    shots.splice(i, 1);
	    i--;
	}
    }
    window.requestAnimationFrame(tick);
}

function debut () {
    for (var i = 0; i < 200; i++) {
	if (Math.random() > 0.25)
	    etoiles.push(new Etoile(100));
    }
    joueur = new Joueur();    
    mechants.push(new Ennemie());
    document.onkeydown = onkeydownhandlerthingstuffkindaish;   
    tick();
}

function onkeydownhandlerthingstuffkindaish(e) {
    if (e.keyCode == 65) {
	joueur.move(-1);
    } else if (e.keyCode == 68) {
	joueur.move(1);
    } else if (e.keyCode == 32) {
	joueur.shot();
    }
}
