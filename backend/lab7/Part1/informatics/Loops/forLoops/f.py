num = input()
found_non_zero = False 
for i in range(len(num) - 1 , -1 , -1):
    if (num[i] != 0):
        found_non_zero = True
    
    if found_non_zero:
        print(num[i] , end = "")