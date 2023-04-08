# Ruby Classes and Objects 1/06/2023

    # syntax:
        # class
        # end

# OOP - object oriented programming
# Pascal Casing

# p 1.class
#output: Integer

# p 5.0.class
#output: Float

# p true.class
#output: TrueClass

# p false.class
#output: FalseClass

    # class Hulu

    # end

    # .new job is to make objects from classes
    # p Hulu.new
        # output: #<Hulu:0x00000001110939b0> unique object made from the hulu class
    # alaska_daily = Hulu.new
    # p alaska_daily
        # output: #<Hulu:0x000000011e8db408>

# things we want to be able to do:
#  - set data - setters
#  - get data - getters

# referring to this in javascript we use @ in Ruby
# @variable_name- instance variable, a variable that belongs to a class

    # class Hulu
    #     def set_show_data title
    #         @title = title
    #     end
    # end
    # alaska_daily = Hulu.new
    # p alaska_daily
        # # output: #<Hulu:0x00000001290e2a70> no change because there is no method call
    # alaska_daily.set_show_data('Alaska Daily')
        # # output: #<Hulu:0x000000013d0d27b0>
    # p alaska_daily
        # # output: #<Hulu:0x000000013d0d27b0 @title="Alaska Daily"> Now has a value

    # # Create a new HULU show
    # lego_masters = Hulu.new
    # lego_masters.set_show_data('Lego Masters')
    # p lego_masters
        # output: #<Hulu:0x000000014a8722d8 @title="Lego Masters">

# SETTER METHOD WITH TWO PARAMETERS:
    # class Hulu
    #     def set_show_data(title, run_time)
    #         @title = title
    #         @run_time = run_time
    #     end
    # end

    # alaska_daily = Hulu.new
    # alaska_daily.set_show_data('Alaska Daily', '30min')
    # p alaska_daily
        # # output: #<Hulu:0x000000015b05a0d0 @title="Alaska Daily", @run_time="30min">
    # lego_masters = Hulu.new
    # lego_masters.set_show_data('Lego Masters', '60min')
    # p lego_masters
        # output: #<Hulu:0x000000015b059e28 @title="Lego Masters", @run_time="60min">
    
# GETTER METHOD:
    # class Hulu
    #     def set_show_data(title, run_time)
    #         @title = title
    #         @run_time = run_time
    #     end
    #     def get_title
    #         @title
    #     end
    #     def show_info
    #         "The show #{@title} is #{@run_time} long."
    #     end
    # end

    # alaska_daily = Hulu.new
    # alaska_daily.set_show_data('Alaska Daily', '30min')
    # p alaska_daily.get_title
        # # output: "Alaska Daily"
    # p alaska_daily.show_info
        # # output: "The show Alaska Daily is 30min long."

    
    # lego_masters = Hulu.new
    # lego_masters.set_show_data('Lego Masters', '60min')
    # p lego_masters.get_title
        # # output: "Lego Masters"
    # p lego_masters.show_info
        # output: "The show Lego Masters is 60min long."

# REFACTOR:

    # intialize: Ruby recongizes the intial method is invoked when calling .new
    # class Hulu
    #     def initialize(title, run_time)
    #         @title = title
    #         @run_time = run_time
    #     end
    #     def get_title
    #         @title
    #     end
    #     def show_info
    #         "The show #{@title} is #{@run_time} long."
    #     end
    # end

    # alaska_daily = Hulu.new('Alaska Daily', '30min')
    # p alaska_daily.get_title
    # # output: "Alaska Daily"
    # p alaska_daily.show_info
    # # output: "The show Alaska Daily is 30min long."
    
    # lego_masters = Hulu.new('Lego Masters', '60min')
    # p lego_masters.get_title
    # # output: "Lego Masters"
    # p lego_masters.show_info
    # output: "The show Lego Masters is 60min long."

# MORE LOGIC INTO THE CLASS 
    # determine whether we have watched this show before

    # class Hulu
    #     def initialize(title, run_time)
    #         @title = title
    #         @run_time = run_time
    #         @watched = false
    #     end
    #     def get_title
    #         @title
    #     end
    #     def show_info
    #         "The show #{@title} is #{@run_time} long."
    #     end
    #     def watched_it
    #         @watched = true
    #         # methods job is update the value of the variable
    #     end
    # end

    # alaska_daily = Hulu.new('Alaska Daily', '30min')
    # # p alaska_daily.get_title
    # # p alaska_daily.show_info
    # p alaska_daily
    # # output: #<Hulu:0x000000012803a8f8 @title="Alaska Daily", @run_time="30min", @watched=false>
    # p alaska_daily.watched_it
    # # output: true
    # p alaska_daily
    # output: #<Hulu:0x000000012803a8f8 @title="Alaska Daily", @run_time="30min", @watched=true>
        
    
    # lego_masters = Hulu.new('Lego Masters', '60min')
    # p lego_masters.get_title
    # p lego_masters.show_info

# REFACTOR:
    # class Hulu
    #     def initialize(title, run_time)
    #         @title = title
    #         @run_time = run_time
    #         @watched = false
    #     end
    #     def get_title
    #         @title
    #     end
    #     def show_info
    #         if @watched
    #             "You have watched the show #{@title}, which is #{@run_time} long."
    #         else 
    #             "You have not watched the show #{@title}, which is #{@run_time} long."
    #         end
    #     end
            # setter method
    #     def watched_it
    #         @watched = true
    #         # methods job is update the value of the variable
    #     end
    # end

    # alaska_daily = Hulu.new('Alaska Daily', '30min')
    # # p alaska_daily.get_title
    # # p alaska_daily.show_info
    # p alaska_daily.show_info
        # # output: "You have not watched the show Alaska Daily, which is 30min long."
    # p alaska_daily.watched_it
        # # output: true
    # p alaska_daily.show_info
        # output: "You have watched the show Alaska Daily, which is 30min long."
    
    # lego_masters = Hulu.new('Lego Masters', '60min')
    # p lego_masters.get_title
    # p lego_masters.show_info

# attr_accessor REFACTOR:
# HELPER METHODS - are method that make more methods
# in ruby that will manage getters and settters
    
    class Hulu
        attr_accessor :title, :watched
        # will automatically give a getter and setter method
        # :title - symbol of a instance variable 
        # attr_accessor -take an arguement and creat arguements form that method (will want to redefine or get the value)
        def initialize(title, run_time)
            # holds instance variables 
            @title = title
            @run_time = run_time
            @watched = false
        end
        def show_info
            if @watched
                "You have watched the show #{@title}, which is #{@run_time} long."
            else 
                "You have not watched the show #{@title}, which is #{@run_time} long."
            end
        end
    end

    alaska_daily = Hulu.new('Alaska Daily', '30min')
    p alaska_daily
    # output: #<Hulu:0x00000001490d6cc8 @title="Alaska Daily", @run_time="30min", @watched=false>
    p alaska_daily.title
    # output: "Alaska Daily"
    p alaska_daily.show_info
    # output: "You have not watched the show Alaska Daily, which is 30min long."
    alaska_daily.watched = true
    p alaska_daily.show_info
    # output: "You have watched the show Alaska Daily, which is 30min long."