def sum2(nums):
  
  if len(nums) == 0:
    return 0 
  if len(nums) < 2:
    sum = 0
    for num in nums:
      sum += num 
    return sum 
  
  return nums[0] + nums[1]
