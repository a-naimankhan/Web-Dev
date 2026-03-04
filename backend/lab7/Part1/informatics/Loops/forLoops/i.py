num = int(input())
cnt = 0
for n in range(1 ,num+1):
    if num % n == 0:
        cnt += 1
print(cnt)
