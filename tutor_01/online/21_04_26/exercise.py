
# # 1번문제
# """
#     배열 함수 이용법 익히는 문제같음
# """
# # 1-1
# lst = [10, 1, 5, 2]

# # 초기화
# result = []
# # 배열을 뒤에 합치는 함수 extend
# result.extend(lst)
# result.extend(lst)

# print(result) # 출력: [10, 1, 5, 2, 10, 1, 5, 2]

# # 1-2
# result.append(result[0]*2)

# print(result) # 출력: [10, 1, 5, 2, 10, 1, 5, 2, 20]

# # 1-3
# # 홀수 체크 
# """
#     list compregension 
#     리스트의 특정값들을 여과하는 작업
# """
# result = result[1::2] # 1번째 항목부터 index를 2칸씩 이동

# print(result)



# # 2번 문제
# ```
#     배열 함수 append, contain 활용
# ```

# vectorArray = []
# vectorArrayLength = int(input("vertor 수: "))

# # 입력한 숫자 만큼 array에 값을 입력
# for i in range(0, vectorArrayLength):
#     vector=input()
#     vectorArray.append(vector)

<<<<<<< HEAD
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
=======

# # 2-1  append
# print("vector 크기: " + str(len(vectorArray)))

# # 2-2 in 문제
# # 마지막 입력이 기존 배열에 있는 항목이라면 YES 출력
# checkNumber = input()
# if checkNumber in vectorArray:
#    print("YES")



# 3번문제
"""
    list와 for, if 의 활용
"""

# message = ['spam', 'ham', 'spam', 'ham', 'spam'] 

# # 3-1
# dummy = []
# for i in message:
#     if i == 'spam':
#         dummy.append(1)
#     elif i == 'ham':
#         dummy.append(0)

# print(dummy)

# # 3-2
# spam_list = []

# for i in message:
#     if i == 'spam':
#         spam_list.append(i)

# print(spam_list)
>>>>>>> 5a977034bce0badfc0f6edb3c8d61215978a6417
