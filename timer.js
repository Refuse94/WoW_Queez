var time_out=false;
var timer_id;


function timer() {
  var time_limit = 5;


  timer_id = setInterval(() => {
    if (time_limit == 0) {
      time_out = true

      $('#timer').html('Čas vypršal').hide(1500);




    } else {
      time_out = false
      if (time_limit < 10) {
        time_limit = 0 + '' + time_limit;
      }

      $('#timer').html('00:' + time_limit);

      time_limit -= 1;

    }
  }, 1000);
}

timer();

