## When I was in university radio, I created software to help the workflow

<p class="meta">2017–2019</p>

<figure class="figure-clip-manager">
	<div class="figure-clip-manager-inner">
		<img src="{{ '/assets/clip-manager-dev.jpg' | url }}" width="384" alt="Screenshot of development"/>
		<div class="clip-manager-video">
			<div class="vimeo-container" style="padding-top:59.05%"><iframe src="https://player.vimeo.com/video/854026412?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe></div>
		</div>
	</div>
</figure>

A major challenge, but nonetheless very exciting: I worked with MIDI hardware, and developed a **native app for Mac in Swift and Windows in C#.** I taught myself brand new things in service of solving an important problem: The instant playing of sound effects in shows at the university radio station.

All existing solutions were either sub-par or prohibitively expensive. With a little handiwork, the best solution was created. Drag a sound to a button in the software, and tap that button, and the sound was instantly played. The hardware button lights up as long as the sound is still playing. <!-- The resulting audio was being sent to its own channel on the mixer, allowing the studio engineer to set the volume level as fit. --> **MIDI signals, audio interfaces and drag events.** Hardware and software working together as one.
