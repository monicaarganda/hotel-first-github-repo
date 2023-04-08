# Active Record

- ORM - object relational mapping
--> translator - RUBY and SQL
- layer around db that allows us to write SQL queries in ruby code

- $ rails new active-record -d postgresql -T
- $ cd active-record
- $ rails db:create
Created database 'active_record_development'
Created database 'active_record_test'
- $ psql
- $ \l
active_record_development | learnacademy | UTF8     | C       | C     | 
active_record_test        | learnacademy | UTF8     | C       | C     | 
- $ q
- $ \q
- $ code .

CREATING MODEL

- $ rails generate model Schedule)model name: PascelCase) day:string (columns:DataType) date:date task:string
 invoke  active_record
      create    db/migrate/20230112182821_create_schedules.rb
      create    app/models/schedule.rb

- $ rails db:migrate
== 20230112182821 CreateSchedules: migrating ==================================
-- create_table(:schedules)
   -> 0.0091s
== 20230112182821 CreateSchedules: migrated (0.0092s) =========================

* ran the methods

- $ rails console || rails c
similar to irb

input: 
3.0.0 :001 > Schedule.all
output:
  Schedule Load (0.8ms)  SELECT "schedules".* FROM "schedules"
 => [] 
 - wrote the sequal for us 
 - received an empty array because at this point we have not put any data in

 3.0.0 :002 > Schedule.create(day:'Thursday', date:'2023-01-12', task:'Whiteboard
')
- directly adding data to the database we have the structure for on my local no one elses
TRANSACTION (0.5ms)  BEGIN
Schedule Create (6.2ms)  INSERT INTO "schedules" ("day","date", "task", "created_at", "updated_at") VALUES ($1, $2,$3, $4, $5) RETURNING "id"  [["day", "Thursday"], ["date","2023-01-12"], ["task", "Whiteboard"], ["created_at","2023-01-12 18:50:28.630262"], ["updated_at", "2023-01-1218:50:28.630262"]]      
TRANSACTION (0.4ms) COMMIT                                             
=>        
#<Schedule:0x00000001059a0500                                  id:1,                                                       day:"Thursday",                                               date: Thu, 12 Jan 2023,                                                  
 task:"Whiteboard",          
 created_at: Thu, 12 Jan 2023 18:50:28.630262000 UTC +00:00,              
 updated_at: Thu, 12 Jan 2023 18:50:28.630262000 UTC +00:00>  

- another input for 'Office Hours'
 3.0.0 :005 > Schedule.create(day:'Thursday', date:'2023-01-12', task:'Office Hou
rs')
  TRANSACTION (0.3ms)  BEGIN
  Schedule Create (0.4ms)  INSERT INTO "schedules" ("day", "date", "task", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["day", "Thursday"], ["date", "2023-01-12"], ["task", "Office Hours"], ["created_at", "2023-01-12 18:54:15.214447"], ["updated_at", "2023-01-12 18:54:15.214447"]]
  TRANSACTION (0.6ms)  COMMIT
 => 
#<Schedule:0x0000000115f4e370
 id: 3,
 day: "Thursday",
 date: Thu, 12 Jan 2023,
 task: "Office Hours",
 created_at: Thu, 12 Jan 2023 18:54:15.214447000 UTC +00:00,
 updated_at: Thu, 12 Jan 2023 18:54:15.214447000 UTC +00:00> 

- Gives back all the instances
 3.0.0 :006 > Schedule.all
  Schedule Load (0.5ms)  SELECT "schedules".* FROM "schedules"
 =>                                                             
[#<Schedule:0x00000001100ee078                                  
  id: 1,                                                        
  day: "Thursday",                                              
  date: Thu, 12 Jan 2023,                                       
  task: "Whiteboard",                                           
  created_at: Thu, 12 Jan 2023 18:50:28.630262000 UTC +00:00,   
  updated_at: Thu, 12 Jan 2023 18:50:28.630262000 UTC +00:00>,  
 #<Schedule:0x00000001100edf38                                  
  id: 2,                                                        
  day: "Thursday",                                              
  date: Thu, 12 Jan 2023,                                       
  task: "Whiteboard\n",                                         
  created_at: Thu, 12 Jan 2023 18:53:29.475785000 UTC +00:00,   
  updated_at: Thu, 12 Jan 2023 18:53:29.475785000 UTC +00:00>,
 #<Schedule:0x00000001100ede70
  id: 3,
  day: "Thursday",
  date: Thu, 12 Jan 2023,
  task: "Office Hours",
  created_at: Thu, 12 Jan 2023 18:54:15.214447000 UTC +00:00,
  updated_at: Thu, 12 Jan 2023 18:54:15.214447000 UTC +00:00>] 
3.0.0 :007 > 

- 3.0.0 :007 > Schedule.find(2)
FINDS id

- 3.0.0 :009 > Schedule.where(task:'Office Hours')
FINDS task

- 3.0.0 :010 > Schedule.find(2).update(task:'Clean Schedule')
UPDATES id 2 from Whiteboarding to Clean Schedule
- 3.0.0 :011 > Schedule.find(2)
SEE update

- 3.0.0 :011 > Schedule.find(2).destroy
DELETES instance

scary = Schedule.first

scary
will pull the first instance