const radius = 10;
const m = 5500;

function setup() {
	createCanvas(11000, 11000);
	background(0);

	const circles = Math.floor(data.length / 360);
	for(let i=0, o=circles; i <= circles; i++, o--) {
		//console.log(i, o);
		for(let j = 0; j < 360; j++) {
			noStroke();
			fill(color(data[j * (i+1)]));
			//const a = (50 * o) - (cos(j) * radius), // + (100 - (o * m)),
			//	b = (50 * o) - (sin(j) * radius);// + (100 - (o * m));
			const a = cos(j) * (radius * o), // + (100 - (o * m)),
				b = sin(j) * (radius * o);// + (100 - (o * m));
			circle(m + a, m + b, radius);
			//console.log(m + a, m + b);
		}
	}

	
	console.log(`circles: ${circles}`);			// 537
	console.log(`colors: ${data.length}`);	// 193356
}
