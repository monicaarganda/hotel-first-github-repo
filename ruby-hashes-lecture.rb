# Ruby Hashes 1/5/23

# Structure of a hash
    # HASH - unordered collection of unique keys and their values
    # Defining keys and values with => hash rocket or : 

    # 1st TECHNIQUE
    # newer syntax
    disney_inspiration = {
    merida_quote: 'Our fate lives within us. You only have to be brave enough to see it.',
    dumbo_quote: "Don't just fly, soar.",
    rafiki_qoute: 'The past can hurt, but the way I see it you can either hide from it or learn from it.'
    }
    # hash rocket not necessary because using a symbol
    # symbol is key with a colon on the right

    p disney_inspiration
    # output: displayed in the older syntax
    # {:merida_quote=>"Our fate lives within us. You only have to be brave enough to see it.", :dumbo_quote=>"Don't just fly, soar.", :rafiki_qoute=>"The past can hurt, but the way I see it you can either hide from it or learn from it."}

    # Hash rocket is required when not using a symbol
    # EXAMPLE-----

    # office_space = {
    #     44 => 'Charlean at the desk',
    #     'desk' => 'ergonomic, black, standup desk'
    # }
    # p office_space
    # output: {44=>"Charlean at the desk", "desk"=>"ergonomic, black, standup desk"}

    # 2nd TECHNIQUE - new method
    looney_talk = Hash.new
    # p looney_talk
    # output: {}
# Display/create/update/delete content from the hash
    # CREATE 
    # READ (displaying content)
    # All the pairs in the has
        looney_talk[:bugs_bunny] = 'Whatz up, Doc?'
        # p looney_talk
        # output: {:bugs_bunny=>"Whatz up, Doc?"}
        looney_talk[:road_runner] = 'Meep Meep!'
        # p looney_talk
        # output: {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep!"}
        looney_talk[:slyvester_the_cat] = 'Thufferin Thuccotash!'
        # p looney_talk
        # output: {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep!", :slyvester_the_cat=>"Thufferin Thuccotash!"}

    # #one value
    #     p looney_talk[:road_runner]
    #     # output: "Meep Meep!"
    #     p looney_talk[:slyvester_the_cat]
    #     # output: "Thufferin Thuccotash!"
    #     p looney_talk[:bugs_bunny]
    #     # output: "Whatz up, Doc?"
        
    #     p looney_talk.values
        # output: ["Whatz up, Doc?", "Meep Meep!", "Thufferin Thuccotash!"]

        # UPDATE 
        # looney_talk[:slyvester_the_cat] = "Thufferin Succotash!"
        # p looney_talk
        # output: {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep!", :slyvester_the_cat=>"Thufferin Succotash!"}

    # DELETE
    # delete is a method that requires an arguement in order to reference a key we will have to use ()

    looney_talk.delete(:slyvester_the_cat)
    # p looney_talk
    # output: {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep!"}

# Ducktyping - allows methods to be used in Ruby based on behavior instead of Ruby class

    # Modules - way of grouping like thinks with similar properties
    # Enumerable module - iterable group i.e. hashes, arrays, ranges

    # each for iteration
    #  map for transformation

    # EACH
    # looney_talk.each do |key, value|
    #     p "#{key} often says, #{value}"
    # end
    # output: "bugs_bunny often says, Whatz up, Doc?"
    # "road_runner often says, Meep Meep!"

    # MAP
    # do = {}
        # looney_talk.map do |key, value|
        #     p "#{key} says #{value} 🧮"
        # end
        
        # output: "bugs_bunny says Whatz up, Doc? 🧮"
        # "road_runner says Meep Meep! 🧮"
        
    # To get access to the array
    # store logic in a variable to the console to return an array
        talking_looney = looney_talk.map do |key, value|
            p "#{key} says #{value} 🧮"
        end
        p talking_looney
        # output: ["bugs_bunny says Whatz up, Doc? 🧮", "road_runner says Meep Meep! 🧮"]

        p looney_talk
        # output: {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep!"}

    # Create a method to iterate across the hash
        def character_said hash 
            hash.map do |key, value|
                "#{key} says #{value}"
            end 
        end

        p character_said looney_talk
        p character_said disney_inspiration
        # output: ["bugs_bunny says Whatz up, Doc?", "road_runner says Meep Meep!"]
        # ["merida_quote says Our fate lives within us. You only have to be brave enough to see it.", "dumbo_quote says Don't just fly, soar.", "rafiki_qoute says The past can hurt, but the way I see it you can either hide from it or learn from it."]

