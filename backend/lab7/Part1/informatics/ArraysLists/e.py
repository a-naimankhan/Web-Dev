def isPositive(n):
    if n >= 0:
        return True
    return False



n = int(input())
nums = list(map(int , input().split()))




#or noo idea with the checking curr sign and then move to the next and check is more reliable here I guess 
curr = isPositive(nums[0])

for idx in range(1 , len(nums)):
    if (isPositive(nums[idx]) != curr):
        curr = isPositive(nums[idx])

    




print(cnt)