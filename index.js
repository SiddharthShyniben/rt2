import {writeFileSync} from 'fs';
import {printColor} from './color.js';
import {vector} from './vec3.js';

const image_width = 256;
const image_height = 256;

let file = `P3
${image_width} ${image_height}
255
`;

for (let j = image_height - 1; j >= 0; j--) {
	process.stdout.write(`\r${j} More scanlines`);
	for (let i = 0; i < image_width; i++) {
		const r = i / image_width;
		const g = j / image_height;
		const b = 0.25;
		const color = vector(r, g, b);

		file += `${printColor(color)} `;
	}
	file += '\n';
}

process.stdout.write('\rDone                             \n');

writeFileSync('output.ppm', file);
