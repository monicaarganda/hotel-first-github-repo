#Active Record Associations Lecture

(has_many) is coming from the primary key data table

(Cohort) - A cohort has many students (has_many)
id      name        year
1       Hotel       2022
2       Foxtrot     2022

(Students) - students belong to a cohort (belongs_to)
id      name        cohort_id(foreign key)
1       Monica          1
2       Ney             1
3       Zach            2

- foreign key connects the two tables
- foreign key always lives on the belong_to side
- foreign key data is the primary key of the table were connecting

creating database:
 - $ touch active-record-associations-lecture.md
 - $ code .
 - $ cd ..
 - $ rails new associations -d postgresql -T
 - $ cd associations
 - $ rails db:create
 - $ rails g model Cohort name:string year:string 
 - $ rails db:migrate
 - $ code .
 - $ rails console
 - $ Cohort.all
 - $ exit
 - $ rails g model Student name:string cohort_id:integer
 - $ rails db:migrate
 - $ rails c
 - $ Student.all


 class Cohort < ApplicationRecord
    # parent table holds has_many, reads grammarically correct students is plural
    has_many :students
end

 class Student < ApplicationRecord
    # belongs_to the child (:)symbol lowercase and singular
    belongs_to :cohort
end

- $ Cohort.create(name:'Hotel', year:'2022')
- $ Cohort.create(name:'Foxtrot', year:'2022')

<!-- need to assign child table to fine the primary key -->

- $ hotel = Cohort.find(1)
- $ hotel
if no variable was created then the input would be
* Cohort.find(1).students.create(name:'Monica') *

- $ hotel.students

output: Student Load (0.3ms)  SELECT "students".* FROM "students" WHERE "students"."cohort_id" = $1  [["cohort_id", 1]]                                      
 => []                     


- $ hotel.students.create(name:'Torin')

#<Student:0x00000001073a6468                                                         
 id: 1,                                                                              
 name: "Torin",                                                                      
 cohort_id: 1,                                                                       
 created_at: Fri, 13 Jan 2023 17:53:52.849166000 UTC +00:00,                         
 updated_at: Fri, 13 Jan 2023 17:53:52.849166000 UTC +00:00>  

- $ Student.all
Student Load (0.4ms)  SELECT "students".* FROM "students"
 =>                                                            
[#<Student:0x0000000108224648                                  
  id: 1,                                                       
  name: "Torin",                                               
  cohort_id: 1,                                                
  created_at: Fri, 13 Jan 2023 17:53:52.849166000 UTC +00:00,  
  updated_at: Fri, 13 Jan 2023 17:53:52.849166000 UTC +00:00>] 

- $ hotel.students.create(name:'Dom')
#<Student:0x00000001078b0490                                                         
 id: 2,                                                                              
 name: "Dom",                                                                        
 cohort_id: 1,                                                                       
 created_at: Fri, 13 Jan 2023 18:01:50.382233000 UTC +00:00,                         
 updated_at: Fri, 13 Jan 2023 18:01:50.382233000 UTC +00:00>   

- $ hotel.students
 => 
[#<Student:0x00000001073a6468                                                        
  id: 1,                                                     
  name: "Torin",                                             
  cohort_id: 1,                                              
  created_at: Fri, 13 Jan 2023 17:53:52.849166000 UTC +00:00,
  updated_at: Fri, 13 Jan 2023 17:53:52.849166000 UTC +00:00>,
 #<Student:0x00000001078b0490                                
  id: 2,                                                     
  name: "Dom",                                               
  cohort_id: 1,                                              
  created_at: Fri, 13 Jan 2023 18:01:50.382233000 UTC +00:00,
  updated_at: Fri, 13 Jan 2023 18:01:50.382233000 UTC +00:00>] 

  - $ foxtrot = Cohort.find(2)
  - $ foxtrot
  - $ foxtrot.students.create(name:'Matthew')

output: #<Student:0x00000001078597d0                                                           
 id: 3,                                                                                
 name: "Matthew",                                                                      
 cohort_id: 2,                                                                         
 created_at: Fri, 13 Jan 2023 18:05:44.669199000 UTC +00:00,                           
 updated_at: Fri, 13 Jan 2023 18:05:44.669199000 UTC +00:00>  

