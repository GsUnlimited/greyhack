pow = function(base,power)
if power == 1 then
    return base
end if
result = base
for i in range(1,power-1)
    result = result *  base
end for
return result 
end function