# Intro to Databases and Postgresgl

``ruby
class Student
    def initialize(name, cohort)
    @name = name
    @cohort = cohort
    end
end

Student.new('Romeo', 'Hotel')
Student.new('Heath', 'Foxtrot')
Student.new('Nicole', 'Delta')

## Databases

- way of storing data in an organized way
- Postgresql is a relational database
    - rows and colums
- schema - representation of the database layout

Two things: 
1. what is the structure
2. create actual data

Each row is a unigue instance in the database

Model name = Student
(ID)       (value)         (data)
Primary     name:           cohort:
Key:(PK)      
1           Romeo           Hotel
2           Health          Foxtrot
3           Nicole          Delta


Model - defines the columns and types of data stored i.e: string, number ext.
    - each row is a set of information (instance of Class (object))

Primary Key - unique identifier - each instancee has one

## Postgresql - that have the job to speak to domain languages.
i.e rspec, html are domain specific languages

- domain-specific
- talks to databases
- it is opensource
- is an Object - Relational Database Mgmt System
- OOP approach to programming

- A database is an empty table until we store data
(psql) enter in terminal
progess similar to entering (irb) in terminal, can do whereever you are in your terminal
(\l) to access your locals database
q to quit, then \q in psql

pgAdmin app (master password: SDlearn123)
localhost password (SDlearn123)
countries -> tools -> query tool
Keywords are uppercase by convention
* splat operator means all univeral selector
                
             (model: singular)
SELECT * FROM country

(specific data)
SELECT name, continent FROM country

(limiting the lines returned up to a certain number)
SELECT name, continent, population
FROM country
LIMIT 10

(finding critiea 'North America')
SELECT name, continent, population
FROM country
WHERE continent = 'North America'

1e6 (shorthand for how many zeros)
1,000,000 
(access continents with the population less than 1,000,000)
SELECT name, population
FROM country
WHERE population < 1e6

(use bang operator to not pull data from the Asia continent)
SELECT name, continent, population
FROM country
WHERE continent !='Asia'

(AND operator in order for data to meet 2 conditions)
SELECT name, continent, population
FROM country
WHERE continent !='Asia'
AND population < 1e6

(OR operator in order for the data to meet 1 of the 2 operators)
SELECT name, continent, population
FROM country
WHERE continent !='Asia'
OR population < 1e6

(LIKE operator will return anything with 'America' in it )
SELECT name, continent, population
FROM country
WHERE continent LIKE '%America'

(IS NOT to not include specific value)
(DESC or ASC decending or acending)
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10