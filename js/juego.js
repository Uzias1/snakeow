/*
var velocidad = 25;
var tamanio = 0;
var cabeza;
var x = 20;
var y = 20;
var cuaerpo;
var orientacion = 'D';
var	margenxd = 25;
var canvas;
var ctx;
var perdiste;
var manzana;
var score = 0;
var posX_man = 100;
var posY_man = 200;
var doblaX = 0;
var doblaY = 0;
var comer=0;
var serpiente;


function imagen(){
	cabeza = new Image();
	switch (orientacion){
		case 'D':
			cabeza.src = 'img/cabeza2.png';
			break;
		case 'U':
			cabeza.src = 'img/cabeza_a.png';
			break;
		case 'R':
			cabeza.src = 'img/cabeza_d.png';
			break;
		case 'L':
			cabeza.src = 'img/cabeza_i.png';
			break;
	}

	cuaerpo = new Image();
	cuaerpo.src = 'img/cc.png';
}

function dibujar (){
	if (perdiste == true) {
		return;
	}
	else {
		canvas = document.getElementById('canvas');
		ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		serpiente = {position: null, body: [{x: x, y:y}]};
		switch (orientacion){
			case 'D':
				y=y+5;//baja 
				break;
			case 'U':
				y=y-5;//sube;
				break;
			case 'R':
				x=x+5;//mueve 5 pixeles a la derecha
				break;
			case 'L':
				x=x-5;//mueve 5 pixeles a la izquierda
				break;
		}
		
		

		manzana = new Image();
		manzana.src = 'img/manzana2.png';

		//objetos xD para colision
		var c = {enx: x, eny: y, width: 49, height:45};
		var m = {enx: posX_man, eny: posY_man, width: 55, height: 54};


		if (c.enx < m.enx + m.width &&
		   c.enx + c.width > m.enx &&
		   c.eny < m.eny + m.height &&
		   c.height + c.eny > m.eny) {
			posX_man = Math.round(Math.random() * (canvas.width - 200) + 200);
			posY_man = Math.round(Math.random() * (canvas.height - 200) + 200);

			ctx.drawImage(manzana, posX_man, posY_man);
			tamanio++;
			comer = 1;
			//alert(tamanio);
		} else {
			ctx.drawImage(manzana, posX_man, posY_man);
			//tamanio=1;
		}
		
		//aqui se va a dibujar la serpiente xD
		
		if (comer == 1){
			serpiente.body.push({
				x: x + serpiente.body[serpiente.body.length -1].x,
				y: y + serpiente.body[serpiente.body.length -1].y
			});
			comer = 0;
		}

		if (serpiente.body.length > 1) {
			//serpiente.body.pop();
			serpiente.body.unshift({
				x: serpiente.body[0].x,
				y: serpiente.body[0].y
			});

		}

		serpiente.body.forEach((pos, index) => {
            if (index === 0) {
                ctx.drawImage(cabeza, pos.x, pos.y);
            } else {
                ctx.drawImage(cuaerpo, pos.x, pos.y);
            }
        });

		
	}
}

/*
function generar_manzanas(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");

	manzana = new Image();
	manzana.src = 'img/manzana2.png';

	if (perdiste == true) {
		return;
	} else{
		
	}
}


function update(){
	if (perdiste == true) {
        finxd();
    } else {
    	document.getElementById("puntuaciones").innerHTML = tamanio;
    }
}



function whichButton(event){
	if(event.keyCode=='39' && orientacion != 'L'){
		orientacion = 'R';
		dibujar();
	}

	if(event.keyCode=='37' && orientacion != 'R'){
		orientacion = 'L';
		dibujar();
	}

	if(event.keyCode=='38' && orientacion != 'D'){
		orientacion = 'U';
		dibujar();
	}

	if(event.keyCode=='40' && orientacion != 'U'){
		orientacion = 'D';
		dibujar();
	}
}

function choque (){
	//choque en lo horizontal xD
	if(x <= -margenxd || x > (canvas.width-(2*margenxd))){
		perdiste = true;
	}

	if (y <= -margenxd || y > (canvas.height-(2*margenxd)) ){
		perdiste = true;
	}
}

function finxd(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = '#8D99AE';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fill();

	clearInterval(o);
}

function inicio(){
	if (perdiste == true) {

	} else {
		imagen();
		dibujar();
		choque();
		update();
		//generar_manzanas();
	}
}

var o = setInterval("inicio()", velocidad); //funcion e intervalo de tempo (ms), manda a llamar a la funcion acada tiempo 
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var velocity = 180;
var size = 40;

class object {
    constructor() {
        this.size = size;
    }
    golpe(obj) {
        var difx = Math.abs(this.x - obj.x);
        var dify = Math.abs(this.y - obj.y);
        if (difx >= 0 && difx < size && dify >= 0 && dify < size) {
            return true;
        } else {
            return false;
        }
    }
}

class snake extends object {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.next = null;
    }
    dibujar(ctx) {
        if (this.next != null) {
            this.next.dibujar(ctx);
        } 

        //ctx.fillStyle = "#FFFFFF";
        ctx.drawImage(cuerpo, this.x, this.y, this.size, this.size);
    }
    setxy(x, y) {
        if (this.next != null) {
            this.next.setxy(this.x, this.y);
        }
        this.x = x;
        this.y = y;
    }
    meter() {
        if (this.next == null) {
            this.next = new snake(this.x, this.y);
        } else {
            this.next.meter();
        }
    }
    verSiguiente() {
        return this.next;
    }
}
var tamanio = 0;
class Comida extends object {
    constructor() {
        super();
        this.x = this.generate();
        this.y = this.generate();
    }
    generate() {
        var num = (Math.floor(Math.random() * 59)) * 10;
        return num;
    }
    colocar() {
        this.x = this.generate();
        this.y = this.generate();
        tamanio++;
    }
    dibujar(ctx) {
        //ctx.fillStyle = "#FF0000";
        var manzana;
        manzana = new Image();
        manzana.src = 'img/manzana2.png';
        ctx.drawImage(manzana, this.x, this.y, this.size, this.size);
    }
}

var head = new snake(20, 20);
var comida = new Comida();
var ex = true;
var ey = true;
var xdir = 0;
var ydir = 0;
var cuerpo = new Image();
function move() {
    var nx = head.x + xdir;
    var ny = head.y + ydir;
    head.setxy(nx, ny);
}
function control(event) {
    var cod = event.keyCode;
    if (ex) {
        if (cod == 38) {
            ydir = -size;
            xdir = 0;
            ex = false;
            ey = true;
            cuerpo.src = 'img/ca.png';
        }
        if (cod == 40) {
            ydir = size;
            xdir = 0;
            ex = false;
            ey = true;
            cuerpo.src = 'img/c2.png';
        }
    }
    if (ey) {
        if (cod == 37) {
            ydir = 0;
            xdir = -size;
            ey = false;
            ex = true;
            cuerpo.src = 'img/ci.png';
        }
        if (cod == 39) {
            ydir = 0;
            xdir = size;
            ey = false;
            ex = true;
            cuerpo.src = 'img/cd.png';
        }
    }
}

function GameOver() {
    xdir = 0;
    ydir = 0;
    ex = true;
    ey = true;
    head = new snake(20, 20);
    comida = new Comida();
    alert("GAME OVER");
}
function choquepared() {
    if (head.x < 0 || head.x > 700 || head.y < 0 || head.y > 600) {
        GameOver();
    }
}
function choquecuerpo() {
    var temp = null;
    try {
        temp = head.verSiguiente().verSiguiente();
    } catch (err) {
        temp = null;
    }
    while (temp != null) {
        if (head.golpe(temp)) {
            
            GameOver();
        } else {
            temp = temp.verSiguiente();
        }
    }
}

function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    head.dibujar(ctx);
    comida.dibujar(ctx);
}
function main() {
    choquecuerpo();
    choquepared();
    draw();
    move();
    document.getElementById("puntuaciones").innerHTML = tamanio;
    if (head.golpe(comida)) {
        comida.colocar();
        head.meter();
    }
}
setInterval("main()", velocity);
