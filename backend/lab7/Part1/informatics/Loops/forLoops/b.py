start = int(input())
end  = int(input())
remainder = int(input())
divider = int(input())


for num in range(start , end+1):
    if (num % divider == remainder):
        print(num , end = " ")