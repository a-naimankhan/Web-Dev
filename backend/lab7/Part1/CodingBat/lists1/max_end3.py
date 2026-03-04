def max_end3(nums):
  maxEnd = []
  num = max(nums[0] , nums[-1])
  
  
  for i in range(3):
    maxEnd.append(num)
  return maxEnd
