from practise7.models.MenuItem import MenuItem


class FirstMeal(MenuItem):
    def __init__(self , name , price , category , is_avaible , is_spicy , cooking_time_mins):
        super().__init__(name , price, category , is_avaible)
        self.is_spicy = is_spicy
        self.cooking_time_mins = cooking_time_mins

    def get_description(self):
        return f"{self.name} : {self.price} KZT  -- {self.cooking_time_mins} mins --  spicy: {self.is_spicy}"

    