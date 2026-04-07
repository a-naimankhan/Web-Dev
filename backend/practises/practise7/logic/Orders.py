class Order:
    def __init__(self , order_id : str):
        self.order_id = order_id
        self.items = []


    def add_item(self, item):
        if item.isAvaible():
            print(f" Adding {item.get_description()} -- SUCCESS")
            self.items.append(item)
        else:
            print(f" Adding {item.get_description()} -- FAILURE")
        return


    def remove_item(self , item):
        self.items.remove(item)

    def get_total(self):
        sum = 0
        for item in self.items:
            sum += item.getPrice()
        return sum


    def get_item_count(self):
        return len(self.items)


    def get_summary(self , ):
        print("ORDER " , self.order_id)
        for item in self.items:
            print(f"-{item.get_description()}")
        print(f"total : {self.get_total()}")

    def __str__(self):
        return f"{self.order_id} | {self.items}\n Total items : {self.get_item_count()} \nTotal sum : {self.get_total()}"
