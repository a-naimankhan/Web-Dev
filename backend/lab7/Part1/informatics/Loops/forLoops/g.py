num = int(input())

for n in range(2 ,num+1):
    if num % n == 0:
        print(n)
        break
else:
    print(num)
    