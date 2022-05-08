export const vector = (x, y,z) => {
	if (x.vector === true) {
		return x;
	}

	return {
		vector: true,
		x, y, z
	}
}

export const negate = x => {
	const t = vector(x);
	return vector(-t.x, -t.y, -t.z);
};

export const add = (x, y) => {
	const t = vector(x);
	const u = vector(y);
	return vector(t.x + u.x, t.y + u.y, t.z + u.z);
}
