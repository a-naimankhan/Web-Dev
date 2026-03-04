def sum67(nums):
    total = 0
    counting = True  # Наш рубильник: изначально мы считаем
    
    for num in nums:
        if num == 6:
            counting = False # Встретили 6 — выключили счетчик
            
        if counting:
            total += num     # Прибавляем только если рубильник ВКЛ
            
        if num == 7 and not counting:
            counting = True  # Встретили 7 — включили счетчик обратно
            
    return total