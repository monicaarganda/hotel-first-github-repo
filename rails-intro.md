# Introduction to Rails 1/12/2023
RAILS MOTTO: "Convention over Configuration"

- Rails is a framework that uses Ruby 
- Rails follows MVC architecture - organization/structure of code
- M - Model (ex. pgAdmin app)
- V - View
- C - Controller

- Model is the database layer
- View - what the user sees
- Controller - switch board

- FULLSTACK! 

# Creating a Rails App

- SQL seqal default language mini test
- preferred useage is postgresql

- rails -v 
check rails verison
output: Rails 7.0.4

- rails new <app-name(ex: my_app (snake_case))> -d postgresql -T 
-d - drops out of the box database and installs postgresql
-T - drops the default mini test testing framework/suite

# Notes
- server-side web app framework
- "Convention over Configuration"
- convention around how files are structured and database is designed
- Rails Magic

## CREATE DATABASE
- First thing after you create a rails app, after cd-ing into it, (can not run without a db) create database
- $ cd my_app
- $ rails db:create
output: 
Created database 'my_app_development'
Created database 'my_app_test'

- $ psql to look at database
- $ \l
output: 
postgres           | learnacademy | UTF8     | C       | C     | 
- q
- quit

- code . into my_app

- $ rails server || $ rails s
starts the server
Use Ctrl-C to stop

--> go to browser and type <localhost:3000>