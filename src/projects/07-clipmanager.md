## When I was in university radio, I created software to help the workflow

<p class="meta">2017–2019</p>

<figure class="figure-clip-manager">
	<div class="figure-clip-manager-inner">
		<img src="{{ '/assets/clip-manager-dev.jpg' | url }}" width="384" alt="Screenshot of development"/>
		<div class="clip-manager-video">
			<div class="video-container" style="padding-top:59.05%"><video data-src="{{ '/assets/clip-manager.mp4' | url }}" muted autoplay loop playsinline preload="none" aria-hidden="true"></video></div>
		</div>
	</div>
</figure>

A major challenge, but nonetheless very exciting: I worked with MIDI hardware, and developed a **native app for Mac in Swift and Windows in C#.** I taught myself brand new things in service of solving an important problem: The instant playing of sound effects in shows at the university radio station.

All existing solutions were either sub-par or prohibitively expensive. With a little handiwork, the best solution was created. Drag a sound to a button in the software, and tap that button, and the sound was instantly played. The hardware button lights up as long as the sound is still playing. <!-- The resulting audio was being sent to its own channel on the mixer, allowing the studio engineer to set the volume level as fit. --> **MIDI signals, audio interfaces and drag events.** Hardware and software working together as one.
