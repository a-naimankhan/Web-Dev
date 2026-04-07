class MenuItem:
    def __init__(self , name , price ,  category , is_avaible: bool):
        self.name = name
        self.price = price
        self.category = category
        self.is_avaible = is_avaible

    def getPrice(self):
        return self.price

    def get_description(self):
        return self.name

    def toggle_avaible(self , avaible):
        self.is_avaible = avaible

    def isAvaible(self):
        return self.is_avaible

    def __str__(self):
        return f"{self.name}--{self.price}KZT {self.category}"