## When I was in university radio, I created software to help the workflow

<p class="meta">2017–2019</p>

<style>
	#clip-manager-thingy {
		float: left;
		position: relative;
		margin: 0 1.5rem 0 -14rem;
		width: 27rem;
		height: 24rem;
	}

	#clip-manager-thingy .clip-manager-video {
		position: absolute;
		top: 9.5rem;
		left: 3rem;
		width: 24rem;
		box-shadow: 0 0 1rem rgba(37, 36, 48, .75);
	}
</style>

<div id="clip-manager-thingy">
	<img src="{{ '/assets/clip-manager-dev.jpg' | url }}" width="384" alt="Screenshot of development"/>
<div class="clip-manager-video">
<div style="padding:59.05% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/854026412?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>
</div>
</div>

A major challenge, but nonetheless very exciting: I worked with MIDI hardware, and developed a **native app for Mac in Swift and Windows in C#.** I taught myself brand new things in service of solving an important problem: The instant playing of sound effects in shows at the university radio station.

All existing solutions were either sub-par or prohibitively expensive. With a little handiwork, the best solution was created. Drag a sound to a button in the software, and tap that button, and the sound was instantly played. The hardware button lights up as long as the sound is still playing. <!-- The resulting audio was being sent to its own channel on the mixer, allowing the studio engineer to set the volume level as fit. --> **MIDI signals, audio interfaces and drag events.** Hardware and software working together as one. <br style="clear:left" />
