function ScrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

function ChangeVideo(video, program) {
	// Get target
	var target = document.getElementById('js-video-mark');
	// Change video
	var videoContent = document.getElementById('js-video-content');
	var newVideo = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/'+video+'?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"allow="autoplay; fullscreen" allowfullscreen></iframe></div>';
	// Change program
	var programContent = document.getElementById('js-program-content');
	var newProgram = '<iframe height="400" src="https://login.concursosancce.com/result/iframe/tv/'+program+'/S8/" frameborder="0"></iframe>';

	videoContent.innerHTML = newVideo;
	programContent.innerHTML = newProgram;
	ScrollTo(target);

}
