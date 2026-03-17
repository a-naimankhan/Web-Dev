from models import BankAccount, SavingsAccount, BusinessAccount



def startApp():
    # Создаем разные типы счетов
    acc1 = BankAccount("Иван Иванов", 1000, "A001")
    acc2 = SavingsAccount("Мария Сидорова", 5000, "S002", 10)
    acc3 = BusinessAccount("ООО 'Рога и Копыта'", 20000, "B003")

    # Собираем всех в один список (Полиморфизм в действии)
    all_accounts = [acc1, acc2, acc3]

    print("--- ТЕКУЩЕЕ СОСТОЯНИЕ СЧЕТОВ ---")
    for acc in all_accounts:
        print(acc) # Вызывает __str__ для каждого типа счета

    print("\n--- ТЕСТИРУЕМ ОПЕРАЦИИ ---")
    
    # 1. Обычный счет: вносим деньги
    print(acc1.deposit(500))

    # 2. Сберегательный: начисляем проценты
    print(acc2.add_interest())

    # 3. Бизнес-счет: снимаем 1000 (должна быть комиссия 50)
    print(acc3.withdraw(1000))


