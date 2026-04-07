import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..'))

from practise7.logic import Order
from practise7.models import FirstMeal, DrinkClass, Desert



# class Size(Enum):
#     S = 0.8
#     M= 1.0
#     L = 1.2

def startApp():
        f1 =FirstMeal("Ramen" , 1990 , "soup" , True , True  , 20 )
        f2 = FirstMeal("Tom Yam" , 2690 , "soup" , True , True , 30)
        f3 = FirstMeal("Plov" , 1690 , "main" , True , False  , 15)

        false_meal = FirstMeal("False meal" , 500 , "tamak" , False , False , 12)



        drink_1 = DrinkClass("Tea" , 200 , "tea" , True , "S" , False)
        drink_2 = DrinkClass("Ice Coffee" , 790 , "ice cream" , True , "M" , False)
        drink_3 = DrinkClass("Cola" , 600 , "Drink" , True , "L" , True)

        deser_1 = Desert("Tort" , 2690 , "tort" , True , 300 , True)
        desert_2 = Desert("Snickers" , 1290 , "snickers" , True , 300 , True)
        deser_3 = Desert("puncake" , 1500 , "puncake" , True , 600 , False )

        order_1 = Order("#001")

        print("---CREATING ORDER----")

        order_1.add_item(f1)
        order_1.add_item(drink_2)
        order_1.add_item(deser_1)


        #false adding meal
        order_1.add_item(false_meal)



        # print(f"Total: {order_1.get_total()}")

        print(order_1.get_summary())



# def show_menu():
#     #TODO


if __name__ == "__main__":
        startApp()



