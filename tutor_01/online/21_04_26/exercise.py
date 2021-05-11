
# 1번문제
"""
    배열 함수 이용법 익히는 문제같음
"""
# 1-1
lst = [10, 1, 5, 2]

# 초기화
result = []
# 배열을 뒤에 합치는 함수 extend
result.extend(lst)
result.extend(lst)

print(result) # 출력: [10, 1, 5, 2, 10, 1, 5, 2]

# 1-2
result.append(result[0]*2)

print(result) # 출력: [10, 1, 5, 2, 10, 1, 5, 2, 20]

# 1-3
# 홀수 체크 
# """
#     list compregension 
#     리스트의 특정값들을 여과하는 작업
# """
# result = result[1::2] # 1번째 항목부터 index를 2칸씩 이동

# print(result)


class Expense:
    def __init__(self, date, coffee, traffic, bob):
        self.date = date
        self.coffee = coffee
        self.traffic = traffic
        self.bob = bob

    def get_sum(self):
        return self.coffee + self.traffic + self.bob

    def get_string(self):
        return "{}\t{}\t{}\t{}\t{}".format(
            self.date,
            self.coffee,
            self.traffic,
            self.bob,
            self.get_sum())

expenses = [
    Expense("3/1", 8700, 9800, 8800),
    Expense("3/2", 5700, 9700, 6700),
    Expense("3/3", 8700, 9800, 9800),
    Expense("3/4", 5700, 9500, 6700),
    Expense("3/5", 8700, 6800, 8800),
    Expense("3/6", 5700, 9700, 6700),
    Expense("3/7", 8300, 9800, 9800),
    Expense("3/8", 5700, 9500, 9700)
]

print("일자","음료대","교통비","기타비용","합계")

coffee_total_price = 0
for expense in expenses:
    print(expense.get_string())
    coffee_total_price = coffee_total_price + expense.coffee

print(coffee_total_price)
