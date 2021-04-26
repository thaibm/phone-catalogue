# Getting Started with Phone Catalogue FE App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Step to run

```
npm install
```
```
npm start
```

### Testing
```
npm run test
```

## Project Structure
```
├── public                     # public static assets (directly copied)
├── src                        # main source code
│   ├── api                    # api service (Axios instance)
│   ├── assets                 # module assets like fonts, images
│   ├── components             # global dumb components
│   │   ├── __test__           # test folder contains testing file
│   │   └── dumb component...
│   │
│   ├── containers             # global container components (we have logic and Cause Side-Effects here)
│   ├── pages                  # app pages
│   ├── routers                # routers
│   ├── store                  # store 
│   │   ├── phones             # contains phone actions and reducer (Using redux thunk because of simple project)
│   │   └── store.ts           # declare store
│   ├── templates              # global layout and template (does not have data logic here)
│   ├── index.css              # main app base style
│   └── index.tsx              # app entry component
├── package.json               # package.json
├── tsconfig.json              # typescript config
└── README.md                  
```
