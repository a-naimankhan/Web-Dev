n = int(input())
nums = list(map(int , input().split()))

# longest = 0 
# curr = 0

# for i in range (1 , len(nums)+1):
#     if (nums[i-1] < nums[i]):
#         curr += 1  
#     else:
#         curr = 1 


#     if (curr > longest):
#         longest = curr
    
# print(longest)

cnt = 0 

for i in range(1 , len(nums)):
    if nums[i] > nums[i-1]:
        cnt += 1

print(cnt)