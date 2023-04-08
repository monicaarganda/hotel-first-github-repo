# Ruby Methods and Conditionals 01/04/22

# methods - functions that belongs to objects, allows us to have reuseable, dynamic code similar to functions in Javascript

# keywords to create a method 
    # def 
    # end
    
    # respect ruby-land and use single qoutations
    # def hotel_message
    #     p 'Aloha Hotel, do you like to dance?'
    # end

    # method call:
    #hotel_message
    # output: "Aloha Hotel, do you like to dance?"

    # to call on in terminal type : ruby <file name>

    # def hotel_message
    #     question = 'Aloha Hotel, do you like to dance?'
    #     p question
    # end

    # hotel_message
    # output: "Aloha Hotel, do you like to dance?"

# METHODS WITH ARGUEMENTS
        # Create a method that takes two strings and returns a statement that is shows who is in the dance off.

        # expected output: "Tricia and Charlean show us your footwork."

        # string interpolation "#{variable}"

    # def dance_off(name1, name2)
    #     "#{name1} and #{name2} show us your footwork."
    # end

    # p dance_off('Tricia', 'Charlean')
    # output: "Tricia and Charlean show us your footwork."

# CONDITIONAL STATEMENTS
        # every if needs an end

        # Create a method that shares catch phrases from certain WWE wrestlers
        # Expected output if The Rock: 'Can you smell what the Rock is cooking?'
        # Expected output if Stone Cold: 'Handed out whipped contents in a can'
        # Expected output if Junk Yard Dog: 'Woof Woof Woof'

# BINARY
        # parathesis are not required for ruby, if I want to use then there should be no space between the method name and argument ex: catch_phrase(wrestler)

        # keyword if to begin conditional statements-takes in a condition, code block is nested under the condition
        # every if needs an end
        # else - catch, does not have a condition, code block is nested under the else
        # because parathesis and curly braces are not necessary, BE MINDFUL OF INDENTATION

    # def catch_phrase wrestler
    #     if wrestler == 'The Rock'
    #         p 'Can you smell what the Rock is cooking?'
    #     else 
    #         p 'Sorry that wrestler did not register on the smack-talk meter'
    #     end
    # end

    # catch_phrase 'The Rock'
    # catch_phrase 'Hulk Hogan'

# MULTIPLE OUTPUTS
        # elsif - (one word drop the e)allows additional conditions to be set, can have as many as necessary, requires a condition and executable code

    # def catch_phrase wrestler
    #     if wrestler == 'The Rock'
    #         p 'Can you smell what the Rock is cooking?'
    #     elsif wrestler == 'Stone Cold'
    #         p 'Handed out whipped contents in a can'
    #     elsif wrestler == 'Junk Yard Dog'
    #         p 'WOOF WOOF WOOF!!!'
    #     else 
    #         p 'Sorry that wrestler did not register on the smack-talk meter'
    #     end
    # end

# METHOD CALL:
    # catch_phrase 'The Rock'
        # output: "Can you smell what the Rock is cooking?"
    # catch_phrase 'Hulk Hogan'
        # output: "Sorry that wrestler did not register on the smack-talk meter"
    # catch_phrase 'Junk Yard Dog'
        # output: "WOOF WOOF WOOF!!!"
    # catch_phrase 'Stone Cold'
        # output: "Handed out whipped contents in a can"

# USER INPUT
        # Create a method that asks a user for their name and birthyear and returns a customized wrestler name and costume. 
        # Expected output: Moss, 2001 ---> 'Moss, you will wear a robe and huge glittery glasses in the shape of 2001'
        # Expected output: Torin, 1977 ---> 'Torin, you will wear a spandex shorts and tube sockds embroidered with 1977'

        # getting user inputs
# gets method - stops the execution of the program and waits for something to be typed in the terminal

    # my_name = gets
    # p my_name
        # output: "Moss\n" 

        # "\n" means new line character that occurs because you have press the enter to input the data from the prompt

        # Recommend printing out a message to inform user what is expected

    # p 'Please enter your name'
    # my_name = gets
    # p my_name

        # output:
        # Moss
        # "Moss\n"

        # .chomp method removes any not-sting characters\

    # p 'Please enter your name'
    # my_name = gets.chomp
    # p my_name

    #     # output: "Moss"

    # p 'Please enter your birth year'
    # birth_year = gets.chomp
    # p birth_year

    #     # output: 2001
    #     # NOTE: values from the gets method are stored a strings

    # def wrestler(name, year)
    #     if year > 2000
    #         p "#{name}, you will wear a robe and huge glittery glasses in the shape of #{year}"
    #     else 
    #         p "#{name}, you will wear a spandex shorts and tube socks embroidered with #{year}"
    #     end
    # end

    # wrestler(my_name, birth_year)
        # output: "Please enter your name"
        # Moss
        # "Moss"
        # "Please enter your birth year"
        # 2001
        # "2001"
        # ruby-conditionals-methods.rb:134:in `>': comparison of String with 2000 failed (ArgumentError)
        #     from ruby-conditionals-methods.rb:134:in `wrestler'
        #     from ruby-conditionals-methods.rb:141:in `<main>'

        # after inputting birth_year because the condition is based on an integer. gets method stored the user input as a string. Therfore we need a method to convert the string to an integer for this method `to_i`.

    p 'Please enter your name'
    my_name = gets.chomp
    p my_name
    
            # output: "Moss"
    
    p 'Please enter your birth year'
    birth_year = gets.chomp.to_i
    p birth_year
    
            # output: 2001
            # NOTE: values from the gets method are stored a strings
    
    def wrestler(name, year)
        if year > 2000
                p "#{name}, you will wear a robe and huge glittery glasses in the shape of #{year}"
        else 
                p "#{name}, you will wear a spandex shorts and tube socks embroidered with #{year}"
        end
    end

    wrestler(my_name, birth_year)
        # output: "Please enter your name"
        # Moss    
        # "Moss"
        # "Please enter your birth year"
        # 2001
        # 2001
        # "Moss, you will wear a robe and huge glittery glasses in the shape of 2001"