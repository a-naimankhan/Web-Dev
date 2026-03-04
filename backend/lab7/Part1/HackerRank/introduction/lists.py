class List:
    def __init__(self):
        self.data =[]
        
    

if __name__ == '__main__':
    N = int(input())
    data = []
    
    for _ in range(N):
        # split() handles any amount of whitespace correctly
        cmd = input().split()
        action = cmd[0]
        
        if action == "insert":
            # Convert arguments to integers: insert(index, value)
            data.insert(int(cmd[1]), int(cmd[2]))
        elif action == "print":
            print(data)
        elif action == "remove":
            data.remove(int(cmd[1]))
        elif action == "append":
            data.append(int(cmd[1]))
        elif action == "sort":
            data.sort()  # Added parentheses
        elif action == "pop":
            data.pop()
        elif action == "reverse":
            data.reverse()