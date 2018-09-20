#MiniprojectOne 

##Brian Koh and Nabeel Younis

Client:
The basis of the front end was created using Craete React App and is done in Reactjs: 
https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md

The end point on G Cloud where the front end was deployed is:
https://seniordesignminiproject-216618.appspot.com/

To run the client, cd into the client folder. Then run the following in the console. Must have npm installed.
```shell
npm start
```

Server:
This is a basic website that is built using [Flask](http://flask.pocoo.org/docs/1.0/)

The basic struture of this webapp is based on the [tutorial](http://flask.pocoo.org/docs/1.0/tutorial/) from the Flask docs.


Some notes to remeber:
- remember to run the following
```shell
flask init-db   #only once, unless you want to reset the DB
export FLASK_APP=flaskr
export FLASK_ENV=development
flask run
```


