from .BankAccount import BankAccount


class BusinessAccount(BankAccount):
    def withdraw(self, amount):
        fee = amount * 0.05 
        total_debt = amount + fee 
        if total_debt <= self.balance:
            self.balance -= total_debt
            return "Buisness account withdraw successful"
    
        return "Not enough money"
    
    # def __str__(self):
    #     return f"{self.owner} has {self.balance} in account {self.account_number}"