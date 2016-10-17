function Stopwatch(elem) {
   var time = 0;
   var interval;
   var offset;

   function update () {
       if (this.isOn) {
           var timePassed = delta();
           time += timePassed;
       }

       var formattedTime = timeFormatter(time);
       var d = document.querySelector('#timer');
       d.innerHTML = formattedTime;
   }

   function delta() {
       var now = Date.now();
       var timePassed = now - offset;
       offset = now;
       return timePassed;
   }

   function timeFormatter(timeInMilliseconds) {
       var time = new Date(timeInMilliseconds);
       var hours = time.getUTCHours().toString();
       var minutes = time.getMinutes().toString();
       var seconds = time.getSeconds().toString();
       var milliseconds = time.getMilliseconds().toString();

       if (hours.length < 2) {
           hours = '0' + hours;
       }
       if (minutes.length < 2) {
           minutes = '0' + minutes;
       }
       if (seconds.length < 2) {
           seconds = '0' + seconds;
       }
       if (milliseconds.length < 3) {
           milliseconds = '0' + milliseconds;
       } else if (milliseconds.length >= 1){
           milliseconds = '' + milliseconds;
       }
       return hours + ' : ' + minutes + ' : ' + seconds + ' : ' + milliseconds;
   }

   this.isOn = false;

   this.start = function () {
       if (!this.isOn) {
           interval = setInterval(update.bind(this), 10);
           offset = Date.now();
           this.isOn = true;
       }
   }

   this.stop = function () {
       if (this.isOn) {
           clearInterval (interval);
           interval = null;
           this.isOn = false;
       }
   }

   this.lap = function () {
       var split = Date.now();
       offset = split;
       var li = document.createElement('li');
       li.innerHTML = offset;
       document.ul.appendChild(li);
   }

   this.reset = function () {
       time = 0;
       update();
   };
}
