$(function() {
	var stations = ["Pune", "Wagholi", "Lonikand", "Koregaon","Sanaswaadi", "Karegaon", "Shirur", "Supa", "Chaas", "Nagar"];
	var fromStationList = $('#fromStation');
	var toStationList = $('#toStation');

	$.each(stations, function(i, station){
		fromStationList.append('<option value="' + station + '">' + station + '</option>');
		toStationList.append('<option value="' + station + '">' + station + '</option>');
	});

	$('#buyTicket').click(function(){
		var fromStation = fromStationList.val();
		var toStation = toStationList.val();
		$('#ticketFromStation').text(fromStation);
		$('#ticketToStation').text(toStation);

		var numberOfStops = stations.indexOf(toStation) - stations.indexOf(fromStation);
		$('#ticketNumberOfStops').text("Number of Stops are : " + numberOfStops);

		var ticketPrice = 0;
		if(numberOfStops < 5){
			ticketPrice = numberOfStops * 5;
			$('#ticketPrice').text("Ticket price is :" + "$" + ticketPrice);
		}
		else{
			$('#ticketPrice').text(" Ticket price is : $10");
		}

		$('#ticketDate').text(new Date());
		
	});


});
