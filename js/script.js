let offset;
let running = false;
let interval;
let timeS = 0;
let timeM = 0;
let timeH = 0;

let precision = 1000;

let timerDisplayData = document.getElementById("disData1");
const startData = document.querySelector('[start-data]');
const stopData = document.querySelector('[stop-data]');
const resetData = document.querySelector('[reset-data]');
console.log(timerDisplayData);


function timeDelta()
{
	let timeNow = Date.now();
	let timeElap = timeNow - offset;
	offset = timeNow;
	console.log('timeElapsed: ' + timeElap);
	return timeElap;
}

function updateTimer()
{
	timeS += timeDelta();
	renderDisplay();
}

function renderDisplay()
{

	timerDisplayData.innerText=Math.floor(timeS/1000).toString();
}

function startTimer()
{
	if(!running)
	{
		running = true;
		offset = Date.now();
		interval = setInterval(updateTimer, precision);
		console.log('startTime: ' + offset);

	}
}

function stopTimer()
{
	if(running)
	{
		running = false;
		clearInterval(interval);
		interval = null;
	}
	renderDisplay();
}

function resetTimer()
{
	running = false;
	clearInterval(interval);
	interval = null;
	timeS = 0;
	renderDisplay();
}



startData.addEventListener('click', () => 
{
	startTimer();
	
})

stopData.addEventListener('click', () => 
{
	stopTimer();
})

resetData.addEventListener('click', () => 
{
	resetTimer();
})