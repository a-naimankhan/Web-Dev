if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    
    
    first = second = -101 
    for num in arr:
        if num > first:
            first , second = num , first 
        elif first > num > second:
            second = num 
    
    print(second) 
    # unique_sorted = sorted(set(arr)) 
    # print(unique_sorted[-2])
    # max , second_max = -101 , -101 
    # for num in arr:
    #     if num > second_max:
    #         second_max = num 
    #         if second_max > max:
    #             max = second_max 
                
    # print(second_max) 
    
    # Wanna use heapq
    
    # but also doon't 
    