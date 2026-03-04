amount = int(input())

cnt = 0 

for _ in range(amount):
    num = int(input())
    if num == 0:
        cnt += 1


print(cnt)