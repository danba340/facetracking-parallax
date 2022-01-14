import { FaceTracker } from "./faceTracker.js";

(async function () {
	const faceTracker = new FaceTracker();
	await faceTracker.init();

	setInterval(async () => {
		const [x, y] = await faceTracker.getCameraParameters();
		console.log("x", x, "y", y)
		document.documentElement.style.setProperty('--bposx-p', `${x}%`);
		document.documentElement.style.setProperty('--bposy-p', `${y}%`);
		document.documentElement.style.setProperty('--bposx-d', `${parseInt(x * 200)}deg`);
		document.documentElement.style.setProperty('--bposy-d', `${parseInt(y * 200)}deg`);
	}, 100)
})()