class FavRecipe
    # gain access to the values in the object created by the class
    attr_accessor :title, :ingredients, :verified

    # initialize method that displays the propertys of an object when it is created/excuted
    def initialize(title, ingredients='still searching')
        @title = title
        @ingredients = ingredients
        @verified = false
    end
    def cooked
        @verified = true
    end
end