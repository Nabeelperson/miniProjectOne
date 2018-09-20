# MiniprojectOne 

## Brian Koh and Nabeel Younis
### Senior Design EC436 Fall 2018

This is a basic website that is built using [Flask](http://flask.pocoo.org/docs/1.0/)

The basic struture of this webapp is based on the [tutorial](http://flask.pocoo.org/docs/1.0/tutorial/) from the Flask docs.

This is a basic JSON API service that is meant to work in hand with the javascript client webapp. 


Some notes to remeber:
- remember to run the following
```shell
flask init-db   #only once, unless you want to reset the DB
export FLASK_APP=flaskr
export FLASK_ENV=development
flask run       #must be in the repo directory and not flakr dirctory
```