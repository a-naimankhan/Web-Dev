def isSquare(num):
    # return num**0.5 == int(num**0.5)
    if num < 0 : return False
    if num == 0: return False 

    low , high = 0 , num 
    while low <= high:
        mid = (low + high) // 2
        square = mid * mid
        if square == num:
            return True
        elif square < num:
            low = mid + 1
        else:
            high = mid - 1
    return False

n = int(input())

i = 1 

while (i <= n):
    if (isSquare(i)):
        print(i)
    
    i += 1
