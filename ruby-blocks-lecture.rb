# Ruby Blocks and Iterables 1/5/2023

# ITERATION - process of repeating a code a ction until condiction is met

# WHILE - needs starting point and end point and condition starts as true and will become false and eventually

# p - prints

# starting point
    # num = 1
    # # ending point
    # while num <= 10
    #     p num
    #     # tells the method where to stop
    #     num += 1
    # end

#Example: # 1
        # 2
        # 3
        # 4
        # 5
        # 6
        # 7
        # 8
        # 9
        # 10

# METHODS
# methods can take an anonymous function ===> referred to as a BLOCK
# use keyword `do` and `end` (multiple lines)
# one-liner use {}

# TIMES
    # executes block certain number of times

    # 8.times do
    #     p 'Hello Hotel!'
    # end

    # new_num = 5
    # new_num.times do
    #     p 'Hello World!'
    # end

#  EACH - works on arrays, iterates through
    #  use pipes (||) to pass a parameter

# nums = [3, 4, 5, 6]

    # nums.each do |num|
    #     p num
    # end

        # output: 3
        #         4
        #         5
        #         6

    # nums.each do |num|
    #     p num * 5
    # end

        # output: 15
        #         20
        #         25
        #         30      

# RANGES - list of values,, give a start and end point separated by 2 dots - ruby fills in the content between the points like a shortcut

#    range = 1..10
#    range.each do |value|
#     p value
#    end
    #output: 1
        #    2
        #    3
        #    4
        #    5
        #    6
        #    7
        #    8
        #    9
        #    10

#    a_range = 'a'..'g'
#    a_range.each do |value|
#     p value 
#    end 
    # output: "a"
    #         "b"
    #         "c"
    #         "d"
    #         "e"
    #         "f"
    #         "g"

#    p a_range.to_a
    # output: ["a", "b", "c", "d", "e", "f", "g"]

    # .to_a returns array of elements in range

# --------

# MAP - returns array of the same length of the thing you're action on

nums = 1..10
    # p nums
    #     output: 1..10

    # nums.map do |val|
    #     p val * 3
    # end

    # output: 3
    #         6
    #         9
    #         12
    #         15
    #         18
    #         21
    #         24
    #         27
    #         30

# to get an array return back assign the method to a variable

    # mapped = nums.map do |val|
    #     val * 3
    # end

    # p mapped
    # output: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

    # p mapped[5]
    # output: 18

    # evens = nums.map do |value|
    #     if value % 2 == 0
    #         'even'
    #     else
    #         value
    #     end
    # end

    # p evens
    # output: [1, "even", 3, "even", 5, "even", 7, "even", 9, "even"]

#     def even_or_odd array
#         array.map do |value|
#             if value.even?
#                 'even'
#             else
#                 'odd'
#             end
#         end
#     end

#    p even_or_odd(nums)
    # output: ["odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even"]

# SELECT - similar to js FILTER - iterates through an array and returns a subset of an array as it makes a decision on each item

    def only_evens(array)
        array.select do |value|
            value.even?
        end
    end

    p only_evens(nums)
    # output: [2, 4, 6, 8, 10]

    def only_evens(array)
        array.select do |value|
            value.odd?
        end
    end

    p only_evens(nums)
    # output: [1, 3, 5, 7, 9]

# def particular_letter(array, letter)
#     new_arr = []
#     array.map do |string|
#         if string.include?(letter)
#             new_arr << string
#         else
#             array
#         end
#     end
#     new_arr
# end