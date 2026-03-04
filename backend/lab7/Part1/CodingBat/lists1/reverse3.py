def reverse3(nums):
  reversed = []
  for i in range(len(nums)-1 ,-1 , -1):
    reversed.append(nums[i])
  return reversed 
