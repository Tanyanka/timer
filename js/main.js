var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('start');
var resetBtn = document.getElementById('reset');
var splitBtn = document.getElementById('split');

var watch = new Stopwatch('timer');

function start () {
    watch.start();
    toggleBtn.textContent = 'Stop';
}

function stop () {
    watch.stop();
    toggleBtn.textContent = 'Start';
}

toggleBtn.addEventListener('click', function () {
    (watch.isOn) ? stop() : start();
});

resetBtn.addEventListener('click', function () {
    if (!watch.isOn) {
        watch.reset();
    }
});

splitBtn.addEventListener('click', function () {
    watch.lap();
});
