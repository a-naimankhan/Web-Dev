from practise7.models.MenuItem import MenuItem
from enum import Enum

# class Size(Enum):
#     S=0.8
#     M=1
#     L=1.3

class DrinkClass(MenuItem):
    def __init__(self , name , price ,  category , is_avaible: bool ,   size, is_cold ):
        super().__init__(name , price , category , is_avaible)
        self.size = size
        self.is_cold = is_cold

    def getPrice(self):
        if self.size == "S":
            return self.price * 0.8
        elif (self.size == "M"):
            return self.price * 1.2
        elif (self.size == "L"):
            return self.price * 1.4
        else:
            return self.size

    def get_description(self):
        return f"{self.name}-- ({self.size}) -- {self.getPrice()} KZT"



