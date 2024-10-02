I'm gonna write every time I get stuck over here

1. When setting up my post + get endpoints, I kept running into an issue where it told me too many servers were using that address. Turns out, when I imported the user router in app.js, I forgot to put .js in user.js. It was a very silly dumb error
2. Ran into the same problem I had before, I very clearly remember this happening. For some reason, my DB file isn't creating the database and I have the promise set up so I doubt that's the issue. Weird. I need to remember how I solved this before
    - It was docker compose!! You NEED to set up your database with docker and make a new yaml file. I'll write this down in case I forget (which YEA I probably will, and I'm CALLING that I'm gonna come back to this file. so HI future mell)
3. Had an issue where data for usernames and passwords weren't flowing as intended. I'd attempt to create a user+password in insomnia, setting them in parameters, but it was only accepting it in JSON format for some reason.
    - I tried changing body-parser since I know you have to do bodyparser.json(), but that wasn't relevant
    - It was because I flipped it around and did req.body instead of req.query. Now I know what an error looks like from that I guess!! Luckily it didn't take long to figure out
4. Back where I started, I'm having trouble finding ways to throw a custom error for when a username is already in use
    - That was surprisingly REALLY hard!! I tried a lot of different ways, and decided to grab the error code being generated from postgres, and use THAT to handle the error it's throwing. But I found out that err is only defined inside of a .catch block. So instead, I opted for slapping that exactly when I create the user. I got insight from chatgpt, but I learned a lot from it and now I know!! Man this was hard LOL

And with that, the user endpoint is finished. Wahooo!!