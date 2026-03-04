import math

def findHypotenuse(a ,b):
    return math.sqrt(a**2 + b**2)

# a , b  = map(int , input().split())
a = int(input())
b = int(input())
print(findHypotenuse(a,b))
