num = int(input())

sum = 0

num_digits = len(str(num)) if num > 0 else 0

for _ in range(num_digits):
    sum += num % 10
    num = num // 10

print(sum)