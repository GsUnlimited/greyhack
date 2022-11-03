Classes and Objects:
    Rule 1(Defining):
        A class needs to look like this:
            ClassName = {}
            ClassName.methodName = function(param, or , params)
            //your code
            end function
        Pls write your Classes in CamelCase starting Up(like A,B,C etc.)
        Pls write functions,Methods and Attributes in CamelCase starting low(a,b,c etc.)
    Rule 2(Necessary members in Classes):
        A Class always needs a .construct method to mimic the usual constructor in every language
        if the class will never get an object initiated from it, there is no need for .construct
    Rule 3(Private members):
        If an Attribute or Method shouldn't or doesn't need to be accessed from outside, pls write an _ before it. e.g.:
            A = {}
            A.x = 1
            A.sumWithX = function(y)
                return self.x + y
            end function
            //here x is publicly available but it doesn't need to, so x should be locked down and be private
            //how it should be declared and used:
            A._x = 1
            return self._x + y
            // the same is for methods. every Helper Method should be internal
            
In General:
        Rule 4:
            Always follow DRY(dont repeat youself) and the clean code rules(rapidly found in the internet)
ErrorMessages:
    Rule 1:
        If you need to throw an Error pls always reffer to the place it happends in your message.  e.g.:
        A = {}
        A.construct = function(param)
            if param == 1 then
                exit("A.construct: param has to be 1")
        end function

Test Rules:
    Rule 1: every component should be tested as granular as possible.
    Rule 2: every component should be tested with benchmarks. Here a litte example:
        beforeSomething = time
        something()
        afterSomething = time
        result = afterSomething - beforeSomething
        print("Time to do something :"+result+"")
