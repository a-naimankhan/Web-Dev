def isSquare(num):
    # return num**0.5 == int(num**0.5)
    if num < 0 : return False
    if num == 0 or num == 1: return False 

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


start = int(input())
end = int(input())

for num in range(start , end + 1):
    if isSquare(num):
        print(num , end = " ")