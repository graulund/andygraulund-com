---
title: Selected personal projects
---


In development, it's all about the passion projects! I can't let go of the keyboard at home!

### Playte

<p class="meta">2012–present</p>

I really love music! I really love statistics! So I fell in love with Last.fm, a site that allows you to track exactly how much you've listened to various songs over time. Seeing potential for improvement, I started a side project that solves the same problems, but adds tons of interesting features. A deep dive into backend services, relational databases, and API integration. The system generates a daily playlist for me in Spotify based on my tastes — and I use it to this day.

The project uses Model/View/Controller, Service/Repository, and PSR-4 modern backend patterns, in order to keep a substantial code base organized.

### Andy's Charts

<p class="meta">2022</p>

<figure>
	<div class="andy-chart-root">
		<noscript>Here is a line chart. Turn on JavaScript to see the chart</noscript>
	</div>
	<figcaption>Demo of an interactive chart: This shows the number of times big tracks by The Weekend were played on a major Danish radio channel per day over a very prolific winter for the artist. Move your mouse over the titles to highlight a specific track</figcaption>
</figure>

In order to display a visualization of the amount of times per day I have played a certain song, I created my own simple charting framework that creates area charts. I know, I know — there's already a ridiculous amount of JavaScript charting frameworks out there. However, I had a hard time finding one that did exactly what I wanted to, and wasn't overly complicated. So I made my own tiny framework in React and SVG. Small, sleek, to the point.

### Fretboard

<p class="meta">2019</p>

<!--
I wanted to learn the guitar, but the fretboard on a guitar is pretty daunting to someone new — so many places where you can place your fingertip, and not be aware exactly what's going to happen. As someone who already knows a bit of music theory, I was curious exactly how the various pitches mapped onto the fretboard.

So I created my own interactive visualization in React; it shows all the pitches laid out, and allows you to select a key, highlighting the points on the fretboard containing pitches only present in this musical key.
-->

I wanted to learn the guitar. I made [my own interactive visualization of a guitar fretboard](https://andyg.dk/fretboard/) in React; it shows all the pitches laid out, and allows you to select a key, highlighting the points on the fretboard containing pitches that are only present in the selected musical key.


### Pyramid

<p class="meta">2017</p>

<!-- I've been hanging out a lot on the live streaming website Twitch over the years. I've gained a big group of friends I got to know over the website. Chatting in Twitch chat is a way I've done a lot of socialization.

But I wanted to keep the connection going even when I wasn't viewing a live stream with friends. -->

A browser-based IRC client for [Twitch](https://www.twitch.tv/) with support for unique Twitch features, including username colors and emotes. A Node.js, React, WebSockets and Electron project, it was an enormous undertaking, and a great learning experience — at some point I even hosted it as a service.


### GoldenTicket.gg

<p class="meta">2021</p>

During the covid pandemic, I became a live streamer on Twitch. I played _community games_; video games meant for viewers to join. Unfortunately, there are limited spots for viewers to join.

<!-- On other community game streams, getting a spot is often a first come first serve kind of situation, which creates chaos. -->

To solve the issue, I created a Node.js/React/WebSockets project that connects to Twitch's API (REST and PubSub), and serves as a very integrated, intuitive queueing system. Once you are at the front of the queue, the application automatically gives you access to the game.

Everything became much more smooth, which elevated the viewing experience vastly, and I once again felt the joy I feel when software — relatively invisibly — solves a problem so well.

