num = int(input())

num_digits = len(str(num)) if num > 0 else 0
power_of_two = 0
decimalNumber = 0 

for _ in range(num_digits):
    last_digit = num % 10 
    if last_digit == 1:
        decimalNumber += 2 ** power_of_two
    power_of_two += 1
    num = num // 10

print(decimalNumber)