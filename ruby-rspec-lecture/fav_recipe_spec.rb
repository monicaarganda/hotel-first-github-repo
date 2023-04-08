# Ruby RSPEC 1/10/23 Hotel Cohort
# Rspec - testing framwork for ruby

# Two files
    # fav_recipe.rb - contains the code for the class
    # fav_recipe_spec.rb - contains the test

# Process
    # add rspec gam 
    # $ gem install rspec
    # run the test
    # $ rspec fav_recipe_spec.rb

# RED - GREEN - REFACTOR

    # Create the test
        # describe 'name of the class' + do/end block
        # it 'property or feature of the class that you are testing' + do/end
        # expect statement

    # Look for a good failure
        # run the test $ rspec <file name>

    # Write a passing code

    # Look for a vaild pass
        # run the test $ rspec <file name>

    # Refactor

# Prompt create a test for the FavRecipe Class

    # Create the test
        # describe 'name of the class' + do/end block
        # it 'property or feature of the class that you are testing' + do/end
        # expect statement
        
        # require 'rspec'
        # require_relative 'fav_recipe'
            # import the rspec tools and appropriate files
            # these imports are normally at the top of the file and are only requires once per file
        
        # describe 'FavRecipe' do
        #     it 'has to be real' do
        #         expect{ FavRecipe.new }.to_not raise_error
        #             # .to_not raise_error purpose is to not get an error
        #     end
        # end

    # Look for a good failure
        # run the test $ rspec <file name>
        # Failures:

        # 1) FavRecipe has to be real
        #    Failure/Error: expect{ FavRecipe.new }.to_not raise_error
           
        #      expected no Exception, got #<NameError: uninitialized constant FavRecipe> with backtrace:
        #        # ./fav_recipe_spec.rb:45:in `block (3 levels) in <top (required)>'
        #        # ./fav_recipe_spec.rb:45:in `block (2 levels) in <top (required)>'
        #    # ./fav_recipe_spec.rb:45:in `block (2 levels) in <top (required)>'
      
        #     Finished in 0.00969 seconds (files took 0.06825 seconds to load)
        #     1 example, 1 failure
            
        #     Failed examples:
            
        #     rspec ./fav_recipe_spec.rb:44 # FavRecipe has to be real

    # Write a passing code

    # Look for a vaild pass
        # run the test $ rspec <file name>

        # Finished in 0.00209 seconds (files took 0.0619 seconds to load)
        # 1 example, 0 failures

        # require 'rspec'
        # require_relative 'fav_recipe'
        
        #    describe 'FavRecipe' do
        #     it 'has to be real' do
        #         expect{ FavRecipe.new }.to_not raise_error
        #     end
        #     # test that the object has a title
        #     it 'has a title' do
        #         cornbread = FavRecipe.new('Buttermilk Cornbread')
        #         expect(cornbread.title).to be_a(String)
        #     end
        # end

        # 1) FavRecipe has a title
        # Failure/Error: cornbread = FavRecipe.new('Buttermilk Cornbread')
        
        # ArgumentError:
        # wrong number of arguments (given 1, expected 0)
        # # ./fav_recipe_spec.rb:86:in `initialize'
        # # ./fav_recipe_spec.rb:86:in `new'
        # # ./fav_recipe_spec.rb:86:in `block (2 levels) in <top (required)>'

        # Finished in 0.0024 seconds (files took 0.06934 seconds to load)
        # 2 examples, 1 failure

        # Failed examples:

        # rspec ./fav_recipe_spec.rb:85 # FavRecipe has a title

        # require 'rspec'
        # require_relative 'fav_recipe'
        
        #    describe 'FavRecipe' do
        #     it 'has to be real' do
        #         expect{ FavRecipe.new('Buttermilk Cornbread') }.to_not raise_error
        #     end
        #     # test that the object has a title
        #     it 'has a title' do
        #         cornbread = FavRecipe.new('Buttermilk Cornbread')
        #         expect(cornbread.title).to be_a(String)
        #     end
        # end

        # Failed examples:

        # rspec ./fav_recipe_spec.rb:111 # FavRecipe has to be real
        # rspec ./fav_recipe_spec.rb:115 # FavRecipe has a title

        # ➜  ruby-rspec git:(ruby-testing) ✗ 
        
        #failing because do not have key that stores the value for title nor access to it

        # Finished in 0.00241 seconds (files took 0.0679 seconds to load)
        # 2 examples, 0 failures

        # Make the test
        # need access to the values/properties within the object created from the class

        # initialize method to state what arguement needs to be given when the class is instantiated

        # NOTE: If you see unexpected failures on previous test, ensure those tests are reflecting the current status of your class declaration

        # require 'rspec'
        # require_relative 'fav_recipe'
        
        #    describe 'FavRecipe' do
        #     it 'has to be real' do
        #         expect{ FavRecipe.new('Buttermilk Cornbread') }.to_not raise_error
        #     end
        #     # test that the object has a title
        #     it 'has a title' do
        #         cornbread = FavRecipe.new('Buttermilk Cornbread')
        #         expect(cornbread.title).to be_a(String)
        #     end
        #     # test that the object can be given ingredients
        #     it 'can be given ingredients or still be searching by default' do
        #         cornbread = FavRecipe.new('Buttermilk Cornbread')
        #         p cornbread
        #         # #<FavRecipe:0x000000014c03e5d8 @title="Buttermilk Cornbread">
        #         expect(cornbread.ingregients).to be_a(String)
        #         expect(cornbread.ingregients).to eq(still searching)
        #    end
        # end

# to see the object, print the object before the object before the expect statement 
    # before modifing the class declaration
        # Failures:

        # 1) FavRecipe can be given ingredients or still be searching by default
        #     Failure/Error: expect(cornbread.ingregients).to be_a(String)
            
        #     NoMethodError:
        #     undefined method `ingregients' for #<FavRecipe:0x000000015343d268 @title="Buttermilk Cornbread">
        #     # ./fav_recipe_spec.rb:155:in `block (2 levels) in <top (required)>'

        # Finished in 0.0024 seconds (files took 0.06291 seconds to load)
        # 3 examples, 1 failure

        # Failed examples:

        # rspec ./fav_recipe_spec.rb:153 # FavRecipe can be given ingredients or still be searching by default

        require 'rspec'
        require_relative 'fav_recipe'
        
           describe 'FavRecipe' do
            it 'has to be real' do
                expect{ FavRecipe.new('Buttermilk Cornbread') }.to_not raise_error
            end
            # test that the object has a title
            it 'has a title' do
                cornbread = FavRecipe.new('Buttermilk Cornbread')
                expect(cornbread.title).to be_a(String)
            end
            # test that the object can be given ingredients
            it 'can be given ingredients or still be searching by default' do
                # cornbread object
                cornbread = FavRecipe.new('Buttermilk Cornbread')
                # p cornbread
                # #<FavRecipe:0x000000014c03e5d8 @title="Buttermilk Cornbread">
                expect(cornbread.ingredients).to be_a(String)
                expect(cornbread.ingredients).to eq('still searching')
                # hot water bread object
                hot_water_bread = FavRecipe.new('Hot Water Bread', 'hot water, corn meal, flour, butter , egg')
                # p 'hot water', hot_water_bread
                # "hot water"
                #<FavRecipe:0x00000001311eb540 @title="Hot Water Bread", @ingredients="still searching">
                expect(hot_water_bread.ingredients).to be_a(String)
                expect(hot_water_bread.ingredients).to eq('hot water, corn meal, flour, butter , egg')
                p hot_water_bread
            end
           it 'has a verification status' do
            stove_top = FavRecipe.new('Stove Top', 'container of Stove Top, water, egg')
            p 'stove top', stove_top
            # #<FavRecipe:0x00000001543d2430 @title="Stove Top", @ingredients="container of Stove Top, water, egg">
            expect { stove_top_cooked }.to change { stove_top.verified }.from(false).to(true)
            end
        end
#         Finished in 0.00254 seconds (files took 0.05957 seconds to load)
# 3 examples, 0 failures