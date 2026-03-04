#HAVE TO THINK ABOUT FASTER SOLUTION IN O(1) TIME

def powersOfTwo(n):

    # if (n == 1): return True

    power_of_two = 1 

    while (power_of_two <= n):

        if (power_of_two == n):
            return True

        power_of_two *= 2

    return False


n = int(input())

if (powersOfTwo(n)):
    print("YES")
else:
    print("NO")

