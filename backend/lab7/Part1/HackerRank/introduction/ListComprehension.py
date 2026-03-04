if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    
    
    #by logic it should O(n^2) 
    #we have to add element to the list if it's sum != n 
    #We can imagine of it like a tree 
    #we start from one point 
    #then if it's not equal to the n or less than n go left and try to add 
    #so logically it is inorder while sum != n 
    #but how to rewrite this idea into the code 
    
    result = [
        [i,j,k]
        for i in range(x + 1)
        for j in range(y + 1)
        for k in range(z + 1)
        if i + j + k != n 
    ]
    
    print(result)