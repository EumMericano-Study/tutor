# Day 2
# python 교재 문제 풀기

# import math

# def mathQuestion(x):
#     return 2.5 * x**2 + 3.3 * x + 6
# print(mathQuestion(2))


# def printHi(time):
#     for x in range(1, time+1):
#         if (x >= 3):
#             print(x)
#             break

#         if (x >= 2):
#             print(x)
#             continue

#         print(x)
#         print("hi")

# printHi(5);

# def calcCalories():
#     fat = int(input("지방의 그램을 입력하세요: "))
#     calbonate = int(input("탄수화물의 그램을 입력하세요: "))
#     protein = int(input("단백질의 그램을 입력하세요: "))
    
#     totalCalories = fat * 9 + calbonate * 4 + protein * 4 
#     print("총칼로리:", totalCalories, "cal")

# calcCalories()


# def printAcronymsAboutThreeWords():
#     firstWord = input("첫번째 단어: ")
#     secondWord = input("두번쨰 단어: ")
#     thirdWord = input("세번째 단어: ")

#     acronyms = firstWord[0].upper() + secondWord[0].upper() + thirdWord[:1].upper() 
#     print("약자:", acronyms)

# printAcronymsAboutThreeWords()

# a = 10
# b = 20
# c = "10"
# d = "20"

# print(a==b)
# print(a+b)
# print(c+d)

# def ifTest ():
#     var = 12
#     if (var > 10):
#         print(var)
#     elif (var > 5):
#         print("var is under 10")
#     else :
#         print("var is under 5")

# ifTest()

# cnt = 0
# while cnt<5:
#     print(cnt)
#     cnt+=1

# import math 

# def calcBaggageWeight ():
#     baggage = int(input("짐의 무게는 얼마입니까? "))

#     if baggage >= 10:
#         price = baggage/10
#         price = int(price)*10000
#         print("수수료는 ",price,"원 입니다")
#     else:
#         print("수수료는 없습니다")



# calcBaggageWeight()
# while True:
#     calcBaggageWeight()

multiline = """안녕하세요. 파이썬 세계로 오신걸
환영합니다.
파이썬은 비단뱀 철머 매력적인 언어입니다.
"""

array = multiline.split()
for i in array:
    print(i)    

print(len(array))