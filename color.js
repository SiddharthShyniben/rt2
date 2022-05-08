export function printColor(c) {
	const {x, y, z} = c;
	return `${Math.round(x * 255.999)} ${Math.round(y * 255.999)} ${Math.round(z * 255.999)}`;
}
