def sum13(nums):
  if len(nums) == 0:
    return 0 
  
  total = 0 
  i = 0 
  
  while i < len(nums):
    if nums[i] == 13:
      i += 2 
      continue 
    
    total += nums[i]
    i += 1 
    
  return total 
  # for num in nums:
  #   if num == 13:
  #     continue
  #   sum += num 
  
  # return sum 
