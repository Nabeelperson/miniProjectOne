# MiniprojectOne 

## Brian Koh and Nabeel Younis
### Senior Design EC436 Fall 2018

#### Client:
The basis of the front end was created using Craete React App and is done in [Reactjs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

The end point on G Cloud where the front end was deployed [here](https://seniordesignminiproject-216618.appspot.com/).

To run the client, cd into the client folder. Then run the following in the console. Must have npm installed.
```shell
npm start
```

#### Server:
The backend of our project is a basic JSON API service that is meant to work in hand with the javascript client webapp.

Access point for backend: ```http://35.185.56.118:8080/```

**Dependencies:**
- Python2.7
- [Flask](http://flask.pocoo.org/docs/1.0/), a light-wieght python framework for quickly developing and testing webapps
    - The basic struture of this webapp is based on the [tutorial](http://flask.pocoo.org/docs/1.0/tutorial/) from the Flask docs
- [waitress](https://docs.pylonsproject.org/projects/waitress/en/latest/), a small WSGI production server webapp manager 

Running the server for testing purposes:
```shell
export FLASK_APP=flaskr
export FLASK_ENV=development
flask init-db   #only once, unless you want to reset the DB
flask run       #must be in the repo directory and not flakr dirctory
```

**Server Deployment:**

The server is run on a gcloud VM instance rather than a app_engine container because it was simpler then trying to containerize flask. 

```shell
export FLASK_APP=flaskr
export FLASK_ENV=production
flask init-db               # !!! WILL RESET DATABASE IF ONE EXSITS!!!
waitress-serve --call \
'flaskr:create_app' &       # Runs on post 8080 by default
```


#### Division of Labour
Both: Agreed on overall design of the project and interactions between client and server

Brian: Built the client 

Nabeel: Built the server