def cat_dog(str):
  cat_counter = 0 
  dog_counter = 0 
  
  for i in range(len(str) - 2):
    if str[i:i+3] == "cat":
      cat_counter += 1
    if str[i:i+3] == "dog":
      dog_counter += 1 
  
  return cat_counter == dog_counter 
