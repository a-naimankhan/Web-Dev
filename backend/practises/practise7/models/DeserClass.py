from practise7.models.MenuItem import MenuItem


class Desert(MenuItem):
    def __init__(self , name , price ,  category , is_avaible: bool , calories , contain_nuts):
        super().__init__( name , price, category , is_avaible)
        self.calories = calories
        self.contain_nuts = contain_nuts

    def get_description(self):
        return f"{self.name} : -- {self.contain_nuts} -- {self.price} KZT"