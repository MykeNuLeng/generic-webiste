# Snowplow Tech Test

This is a simple website that asks the question "Skiing or snowboarding?", and uses snowplow-micro to store the results.

## Method

### Styling

Now I want to start off by appreciating that starting on styling is weird. But I had an image in my head of what I wanted the website to look like, and I was putting off delving into the bulk of this challenge.

I would say that I find myself more comfortable working on typical backend problems, so I wanted to learn a handfull of styling methods and implement them into this project. Admittedly, I spent too much time on this, but I learnt a lot, so it was by no means wasted.

To start off, I chose a background image that:

- Was skiing themed, because, Snowplow.
- Had a large depth of field, so the parallax effect was more obvious.

Once I found the image(from unsplash I believe), I prepared it in Photoshop by separating out the layers into the three different images. Then using JS's Timeline library, I animated the images so that the images in the forground moved up the screen, and the backgound slightly down. This gave the illusion of the camera panning down. Then using JS's ScrollMagic library, I made the animation rely on scrolling rather than time.

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

The initial goal was to have buttons for the poll, and use onclick funtions to trigger an event which could then be accessed from micro. I couldn't quite figure out how to implement this custom event, so I went with links as I knew how to implement trackPageView from the setup.

From there I made 2 pages for each link in the pole, with trackPageView scripts in the head of both. I made a custom title for each of them to make it easier to distinguish the events. Although in hindsight, the JSON from the api includes a url tag, and as I was using separate pages, I could have just relied on that instead of the custom title.

The async for the tracking script was 1s, so I made it redirect back to the homepage after 2, which does feel quite clunky, another reason why buttons would have been a lot nicer.

Now that the 2 pages were being tracked, I wanted a way to display the results of the poll on the homepage.

So to start with, I wanted to make a function that searched through the json data, checked each events name_tracker, and added it to the result if it corresponded to what I was looking for.

As I'm a lot more comfortable coding in Python, I thought it would be a great idea to go ahead and do this, in Python. This was a terrible idea, as I didn't consider how I was going to integrate this function into my node server. Either way, the mistake made me laugh, so I've left the [file](https://github.com/MykeNuLeng/generic-webiste/blob/main/public/json_fetch.py) in the repo.
