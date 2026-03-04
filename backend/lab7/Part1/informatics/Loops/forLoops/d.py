num = int(input())
integer = int(input())

cnt = 0

num_digits = len(str(num)) if num > 0 else 0


for _ in range(num_digits):
    if num % 10 == integer:
        cnt += 1
    num = num // 10

print(cnt)
