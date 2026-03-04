def combo_string(a, b):
  # if len(a) == 0 or len(b) == 0:
  #   return 
  
  # shorter = min(len(a) , len(b))
  # longer = max(len(a) , len(b)) 
  
  # return shorter + longer + shorter 
  
  if len(a) > len(b):
    if len(b) == 0 :
      return "" + a + "" 
    return b + a + b 
  else:
    return a + b + a
  
