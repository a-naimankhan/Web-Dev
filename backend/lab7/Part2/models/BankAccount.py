class BankAccount:
    def __init__(self , owner , balance , account_number):
        self.owner = owner 
        self.balance = balance
        self.account_number = account_number
    
    def deposit(self , amount):
        if amount < 0:
            return "Invalid argument"

        self.balance += amount 
        return f"Deposting {amount} to account {self.account_number}. New balance is {self.balance}"
    
    def withdraw(self, amount):
        if amount <= 0:
            return "Invalid arguments"
        
        if amount > self.balance:
            return "Not enough money"
        
        self.balance -= amount
        return f"Withdrawing {amount} from account {self.account_number}. New balance is {self.balance}"
    

    def __str__(self):
        return f"{self.owner} has {self.balance} in account {self.account_number}"
    
    