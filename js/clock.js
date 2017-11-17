var clock;	
$(document).ready(function() {
	var clock;

	clock = $('.clock').FlipClock({
        clockFace: 'MinuteCounter',
        autoStart: false,
        callbacks: {
        	stop: function() {
        		$('.message').html('The clock has stopped!')
        	}
        }
    });
		    
    clock.setTime(300);//time seconds here (connect sockets time here)
    clock.setCountdown(true);
    clock.start();

});