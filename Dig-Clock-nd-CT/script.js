//Digital clock
function updateClock() {

    var t = new Date();

    var h, m, s;

    h = t.getHours();
    m = t.getMinutes();
    s = t.getSeconds();
//padstart() is a JavaScript string method used to add characters to the beginning of a string until it reaches a specified length.
    h = h.toString().padStart(2, "0"); 
    m = m.toString().padStart(2, "0");
    s = s.toString().padStart(2, "0");

    document.getElementById("clock").innerHTML =
        h + ":" + m + ":" + s;
}

setInterval(updateClock, 1000);

updateClock();

//Counter Time
var count = 0;
var interval = null;
var isStarted = false;

// Start / Resume
function startBtn() {

    // Don't create another interval if timer is already running
    if (interval !== null) {
        return;
    }

    // Only take the input value the FIRST time
    if (!isStarted) {
        count = Number(document.getElementById("secondsInput").value);

        if (count <= 0) {
            alert("Please enter a valid number of seconds.");
            return;
        }

        isStarted = true;
    }

    // Show current value immediately
    document.getElementById("countdown").innerHTML = count;

    interval = setInterval(function() {

        count--;

        document.getElementById("countdown").innerHTML = count;

        if (count <= 0) {
            clearInterval(interval);
            interval = null;
            isStarted = false;
        }

    }, 1000);
}


// Pause
function pauseBtn() {
    clearInterval(interval);
    interval = null;
}


// Reset
function resetBtn() {
    clearInterval(interval);
    interval = null;

    count = 0;
    isStarted = false;

    document.getElementById("countdown").innerHTML = "00:00";
    document.getElementById("secondsInput").value = "";
}


// Connect buttons
document.getElementById("startBtn").addEventListener("click", startBtn);
document.getElementById("pauseBtn").addEventListener("click", pauseBtn);
document.getElementById("resetBtn").addEventListener("click", resetBtn);