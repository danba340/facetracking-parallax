import { FaceTracker } from "./faceTracker.js";

(async function () {
	const faceTracker = new FaceTracker();
	await faceTracker.init();

	setInterval(async () => {
		const [x, y] = await faceTracker.getCameraParameters();
		console.log("x", x, "y", y)
		document.documentElement.style.setProperty('--bposx', `${x * 25}%`);
		document.documentElement.style.setProperty('--bposy', `${y * 25}%`);
	}, 100)
})()