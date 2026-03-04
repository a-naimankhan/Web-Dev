def fast_pow(n, p):
    if p < 0:
        return 1 / fast_pow(n, -p)
    if p == 0:
        return 1
    
    half = fast_pow(n, p // 2)
    if p % 2 == 0:
        return half * half
    else:
        return n * half * half

num , power = map(int  , input().split())

print(pow(num , power))

