# Active Record Migration Lecture 1/12/2023


## Creating a new app in terminal 

- $ rails new party_menu -d postgresql -T
- $ cd party_menu
- $ rails db:create
- $ rails s || rails server 
to start the server in browser
localhost:3000
have the server running to ensure you have the proper feedback and track your code throughout
- $ code .

* Once in party_menu we will be looking at specific files to see the impact of migration *
app -> model 
app -> db
soon -> schemas

### Resources

* https://guides.rubyonrails.org/ *
short cuts for methods 
info about ruby on rails
* https://edgeguides.rubyonrails.org/ *
info about Active Records

in terminal 
* $ rails --help * 

## Process

### Generate a model - ruby class that is used to represent our data --> database

- $ rails generate model EventMenu title:string chef:string
creating/generating model/database locally
ruby will track the changes we make by tracking it in the migrate file
- migrate file will make our model <name> now plural
- to track the generating of the model will create a file 
app-> migrate-> 2... number file 

- $ rails db:migrate
made a change to the database when using ($ rails generate model EventMenu title:string chef:string) so we have to tell our local to store the change in the database by using the ($ rails db:migrate) command

* $ rails c || rails console *
similar to irb
interacts with the database through the console
* control l to clear out terminal in console for ruby on rails *

#### CREATE
cake stored this is a variable
- $ cake = EventMenu.create( title:'Lemon Rasberry Cheesecake', chef:'Cheesecake Factory')

output: #<EventMenu:0x000000011f02e3b8
 id: 1,                       
 title: "Lemon Rasberry Cheesecake",
 chef: "Cheesecake Factory",  
 created_at: Thu, 12 Jan 2023 23:10:12.617094000 UTC +00:00,
 updated_at: Thu, 12 Jan 2023 23:10:12.617094000 UTC +00:00> 

- $ EventMenu.create(title:'Mississippi Mud Roast', chef:'Fred')
- $ EventMenu.create(title:'Egg Rolls', chef:'Bora')
- $ EventMenu.create(title:'Sugar Cookies', chef:'Christian')

#### READ
- $ EventMenu.all
see all the entries in the database
rails created the ids and assigned them the instances created

- $ EventMenu.find(4)
to see a see a specific entry use .find(takes in the id)

- $ EventMenu.where(chef:'Christian')
to see a specific entry if you didnt know the id the chef but you know the value of the key

#### UPDATE
- $ christian = EventMenu.where(chef:'Christian')
- $ christian
store entry in a variable not every time I want to see what Christian is bringing i will just call on the new variable.

- $ christian.update(title:'Cranberry Ginger Ale')
- $ christian
updates chritians previous title from sugar cookies to Cranberry Ginger Ale

#### DELETE
- $ cheesecake_factory = EventMenu.where(chef:'Cheesecake Factory')
to save as a variable
.where saved the variable as an array in order to now access this index will have to use square brackets
- $ cheesecake_factory[0].destory

dessert = EventMenu.find(1)

- $ exit 
to leave console

## Generate a migration
- Migration - new verison of your database
- $ rails generate migration add_price_column
- add change definition

IN APP NEW MIGRATE FILE:

class AddPriceColumn < ActiveRecord::Migration[7.0]
  def change
    # add_column :table_name, :column_name, :datatype
    add_column :event_menus, :price, :string
  end
end

- $ rails db:migrate
- $ rails console
the database will be update with the new key:value pair. Value will be nil because we have not assigned a value

- $ bora = EventMenu.where(title:'Egg Rolls')
- $ bora.update(price:'$25.00')
to update, we will assign an entry to each variable

- if we didnt want to use a variable and just chain it would be 
- $ EventMenu.where(chef:'Fred').update(price) 




- Perform CRUD Actions