# 👀 What is it?

Sometimes making simple decisions on what to cook for dinner, what to watch or what to listen to are super annoying.

This app helps solve that by making the decisions for you.

Take a look: [here](https://decision-mkr.herokuapp.com/)

# ✨ Approach
There were two things I wanted to deepen my experience with for this project: React and third party APIs. 

This app uses functional components to track the state of user inputs to set API GET requests (via axios) out to three free APIs: [Spoonacular](https://spoonacular.com/food-api), [Deezer](https://developers.deezer.com/api) and [OMDB](https://www.omdbapi.com/).

I used a proxy server (Express) to triage my API requests, doing some basic logic on the backend to randomise and refine the returned API responses before sending the data back through to the frontend.


# 👩🏾‍💻 Tech Used

-   React
-   Node
-   TypeScript
-   Express
-   Axios
-   Material UI
-   React Router

# 🗣️ User Stories

-   As a user, I want my food/music/movie decisions simplified. Show me what to eat/listen to/watch so I can focus on other, more important decisions.
-   As a user, I want to guide how these simple decisions are made. Let me select some simple preferences so I can get value from these results.
-   As a user, I want the returned decisions to be randomised, so that I can see new results (almost) every time.

# 📋 Wireframes

![wireframes](app-wireframes.gif)

# ⬇️ Installation
- Clone, or fork + clone this repo
- Open up the project in your IDE
- From the root folder, run `npm install` from the terminal/command line
- From the backend folder, run `npm start` to get this running locally
- If you want to get the API results firing, register for API keys for the services above, and add them to a `.env` file in your backend folder
- If you're keen to tinker with the frontend, remember to run `npm run build` from the frontend folder before running the backend so you can see the latest updates

# 💡 Next Steps
- Next stage is to add custom decisions! A feature that lets a user input the decision they need made; returning a randomised result
- I haven't taken full advantage of MUI's theme options, so code will be refactored to accommodate this

