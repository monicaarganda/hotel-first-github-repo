# Ruby Inheritance Lecture Notes 01/10/2023

# Object-oriented programming (OOP) - 

# Everything in Ruby is an Object
# Meaning everything is an instance of a class
# ex: .include? ''

# initialize method - to declare new instances of Classes with unique data
# - takes as many parameters as we want and we can use then as they want

class Hulu
    # attr_accesstor creates a getter and a setter method for the instance variables it gets passed
    attr_accessor :title, :run_time, :watch
    # setter method:
    def initialize(title, run_title)
        @title = title
        @run_time = run_title
        @watch = false
    end
    # getter method:
    def get_show_data
        if @watch
            "You have watched the show #{@title} which is #{run_time} long."
        else
            "You have not watched the show #{@title} which is #{run_time} long."
        end
    end
end

# podcast, streaming video (Youtube), streaming music (Spotify)

# Inheritance allows classes to have relationships with each other.
# Superclass - common behaviors in a shared class 
# Parent Class - has atributes common to all possible children ex:streaming apps
# Child class - has attributes specific to the child and not the other children ex: hulu, netflix
# superclass passes info to the subclassess

class StreamingApp
    attr_accessor :title, :run_time, :consumed_media
    def initialize(title, run_time)
        @title = title
        @run_time = run_time
        @consumed_media = false
    end
    def content_data
        if @consumed_media
            "You have consumed the media called #{@title} for #{run_time} long."
        else
            "You have not consumed the media called #{@title} for #{run_time} long."
        end
    end
end

# child classes use super().
# initialize method in the child class invokes the super()---> tells the parent class its going to be usedd
# its intialize method and borrow your parameters
# < means they are a subclass of the parent class marks Inheritance
class YouTube < StreamingApp
    def initialize(title_parameter, run_time_parameter, creator_parameter)
        super(title_parameter, run_time_parameter)
        @creator = creator_parameter
    end
end

babish = YouTube.new("How To Make Pigs in a Blanket", "11:15", "Babish")
p babish
# output: #<YouTube:0x00000001380d0ed8 @title="How To Make Pigs in a Blanket", @run_time="11:15", @consumed_media=false, @creator="Babish">
p babish.content_data
# output: "You have not consumed the media called How To Make Pigs in a Blanket for 11:15 long."

class Spotify < StreamingApp
    def initialize(title_parameter, run_time_parameter, artist_parameter, album_parameter)
        super(title_parameter, run_time_parameter)
        @artist = artist_parameter
        @album = album_parameter
    end
    # getter method to get all of this infor in one nice clean stream
    def get_info
        content_data + "This song was created byt #{@artist} and is part of the #{@album} album."
    end
end

lauryn_hill = Spotify.new("Everything is Everything", "3:37", "Lauryn Hill", "The Miseducation of Lauryn Hill")
p lauryn_hill
# output: #<Spotify:0x000000011787aa10 @title="Everything is Everything", @run_time="3:37", @consumed_media=false, @artist="Lauryn Hill", @album="The Miseducation of Lauryn Hill">
p lauryn_hill.get_info
# output: "You have not consumed the media called Everything is Everything for 3:37 long.This song was created byt Lauryn Hill and is part of the The Miseducation of Lauryn Hill album."