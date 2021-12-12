import { FaceTracker } from "./faceTracker.js";

(async function () {
	const faceTracker = new FaceTracker();
	await faceTracker.init();

	setInterval(async () => {
		const [x, y] = await faceTracker.getCameraParameters();
		console.log("x", x, "y", y)
		document.documentElement.style.setProperty('--bposx', `${x * 50}%`);
		document.documentElement.style.setProperty('--bposy', `${y * 50}%`);
	}, 100)
})()