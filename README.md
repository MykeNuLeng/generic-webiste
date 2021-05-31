# Snowplow Tech Test

This is a simple website that asks the question "Skiing or snowboarding?", and uses snowplow-micro to store the results.

## Method

### Styling

Now I want to start off by appreciating that starting on styling is weird. But I had an image in my head of what I wanted the website to look like, and I was putting off delving into the bulk of this challenge.

I would say that I find myself more comfortable working on typical backend problems, so I wanted to learn a handfull of styling methods and implement them into this project. Admittedly, I spent too much time on this, but I learnt a lot, so it was by no means wasted.

To start off, I chose a background image that:

- Was skiing themed, because, Snowplow.
- Had a large depth of field, so the parallax effect was more obvious.

Once I found the image(from unsplash I believe), I prepared it in Photoshop by separating out the layers into the three different images. Then using JS's Timeline library, I animated the images so that the images in the forground moved up the screen, and the backgound slightly down. This gives the illusion of the camera panning down. Then using JS's ScrollMagic library, I made the animation rely on scrolling rather than time.

### Getting snowplow-micro to talk

This was all brand new to me, so in hindsight I can look back at this and think it's straight forward, but at the time, not so much.
There were a few steps to get this running:

- To start off I needed to get Windows Subsystem for Linux set up on my PC, which was definitely more involved than I was expecting.
- Then installing Docker.
- Installing snowplow/snowplow-micro from Dockerhub
- Run the docker command from snowplow-micro readme in my project directory
- Copy across the config files from snowplow-micro - This step took me far longer than I care to admit.
- Using Snoplow's pretty extensive JS tracking library documentation, I found the script tag to put in the head of my index page, and the trackPageView function to implement with it.
- Run the Docker container.
- Load up localhost:9090/micro/all
  I got to admit, when I saw the api returning actual events I was a combination of relieved and excited in about equal measures.

### Tracking the poll results
