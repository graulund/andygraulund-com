## In my free time, I created a personal music stats tracker and playlist algorithm

<p class="meta">2012–present</p>
<style> #playte-grid-thingy img { flex: 0 0 25%; width: 25%; }</style>

<div id="playte-grid-thingy" style="display: flex; width: 61.25rem; margin: 0 -12.625rem 0 -.625rem">
	<img src="{{ '/assets/playte/0.png' | url }}" alt="" />
	<img src="{{ '/assets/playte/1.png' | url }}" alt="" />
	<img src="{{ '/assets/playte/2.png' | url }}" alt="" />
	<img src="{{ '/assets/playte/3.png' | url }}" alt="" />
</div>

I really love music! I really love statistics! <!-- So I fell in love with Last.fm, a site that allows you to track exactly how much you've listened to various songs over time. Seeing potential for improvement, --> I started a side project that tracks my listening habits, but adds tons of interesting features. **A deep dive into backend services, relational databases, and API integration.** The system generates a daily playlist for me in Spotify based on my tastes using a sophisticated algorithm I wrote — and **I use it to this day.** I even briefly dived into native applications for the Mac and iOS. It remains one of the largest projects I have undertaken all on my own in my spare time, and taught me a great deal.

The project uses Model/View/Controller, Service/Repository, and PSR-4 modern backend patterns, in order to keep a substantial code base organized.
