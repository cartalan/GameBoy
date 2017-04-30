(function() {
	var btnA = document.getElementById('btnA');
	var btnB = document.getElementById('btnB');
	var video = document.getElementById('video');

	function play() {
		video.play();
	}
	function pause() {
		video.pause();
	}

	btnA.addEventListener('click', play);
	btnB.addEventListener('click', pause);	
})();