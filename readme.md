# get-dribbble-shots
A simple wrapper (to prevent leaking API keys) with node + express to get your shots from Dribbble API.  

# Requirements
- Node
- Npm
- Registered application with Dribbble and authenticated user with access_token [as explained in this post](https://matthewelsom.com/blog/display-shots-on-webpage-with-dribbble-v2-api.html)

# Setup
Clone project:
```
git clone git remote add origin git@github.com:heijler/get-dribbble-shots.git
```

Install dependencies:
```
npm install
```

In server root create a .env file:
```
DRIBBBLE_KEY=HERE_IS_MY_ACCESS_TOKEN
```

# Running the server
cd get-dribbble-shots
```
node src/index.js
```
Then any call to localhost:5000/get-dribble-shots should work

# Parameters
To get the latest n shots:
```
localhost:5000/get-dribbble-shots?amount=2
```




