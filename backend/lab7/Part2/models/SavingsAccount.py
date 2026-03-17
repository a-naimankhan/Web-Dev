from .BankAccount import BankAccount

class SavingsAccount(BankAccount):
    def __init__(self , owner , balance , account_number , interest_rate):
        super().__init__(owner , balance , account_number)
        self.interest_rate = interest_rate

    def add_interest(self):
        interest = self.balance * (self.interest_rate / 100)
        self.balance += interest
        return "interest added to account"

    def __str__(self):
        return f"{self.owner} has {self.balance} in account {self.account_number}"
    
