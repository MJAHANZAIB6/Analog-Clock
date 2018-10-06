const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
	console.log(date);

	var hr = date . getHours();
	var min = date . getMinutes();
	var sec = date . getSeconds();
	console.log("Hours:" + hr + " Minutes:" + min + " Seconds:" + sec);

	var hrPosition = (hr * 360/12) + (min * (360/60)/12);
	var minPosition = (min * 360/60) + (sec * (360/60)/60);
	var secPosition = sec * 360/60;

function movingTheClock() {

	hrPosition = hrPosition + (30/3600);
	minPosition = minPosition + (6/60);
	secPosition = secPosition + 6;

	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(movingTheClock, 1000);