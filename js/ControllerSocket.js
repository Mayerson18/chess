
  var socket = io.connect();
  socket.on('field', function (data) {
    console.log(data);

    $("#field").html(data);
    Interpretar(data);
  });
  $(document).ready(function() {
        	socket.on('connect', function(data) {
        		socket.emit('join','Hello World');
        	});
  });
