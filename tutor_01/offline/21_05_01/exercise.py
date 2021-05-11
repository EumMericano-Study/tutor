# Day 3

# 매서드와 함수
# string = "underCase";

# print(string)
# print(str.upper(string))




# python 교재 문제 풀기

# print("사각형의 넓이와 둘레를 계산합니다.")
# 가로 = input("사각형의 가로 입력: ")
# 세로 = input("사각형의 세로 입력: ")

# print("------------------------")


# class 사각형:

#     def __init__(self, 가로, 세로):
#         self.가로 = int(가로)
#         self.세로 = int(세로)

#     def 넓이(self):
#         print(self.가로 * self.세로)
    
#     def 둘레(self):
#         print(self.가로 * 2 + self.세로 * 2)



# 변수_사각형 = 사각형(가로, 세로)

# 변수_사각형.넓이()
# 변수_사각형.둘레()


# from statistics import mean
# from math import sqrt

# x = [5, 9, 1, 7, 4, 6]

# # 산포도

# class Scatter :
    
#     def __init__(self, data):
#         self.data=data
    
#     def printSelfData(self):
#         print(self.data)

#     def Avg(self):
#         avg = mean(self.data)
#         return avg

#     def var_sd(self):
#         avg = Avg()

# scatter = Scatter(x)
# scatter.Avg()

# class Person: 
#     def __init__(self, name="", gender="", age=0):
#         self.name = name
#         self.gender = gender
#         self.age = age

#     def display(self):
#         print(self.name + ", " + self.gender + ", " + str(self.age))

# SeungYeop = Person("승엽", "남", 31)
# baby = Person()

# SeungYeop.display()
# baby.display()

class Employee:
    name = None;
    pay = 0

    def __init__(self, name):
        self.name = name

        

class Permanent(Employee):
    payment = 0;
    bonus = 0;

    def __init__(self, name, payment, bonus):
        super().__init__(name)
        self.payment = int(payment)
        self.bonus = int(bonus)

    def getName(self):
        return self.name

    def calcPayment(self):
        return str(self.payment + self.bonus)

class Temporary(Employee):
    time = 0;
    timePerPayment = 0;

    def __init__(self, name, time, timePerPayment):
        super().__init__(name)
        self.time = int(time)
        self.timePerPayment = int(timePerPayment)

    def getName(self):
        return self.name
    
    def printType(self):
        print("고용형태: 계약직")
    
    def calcPayment(self):
        return self.time * self.timePerPayment


permanent = Permanent("음영현", 0, 0)
print(permanent.name)

jobType = input("고용형태를 입력하세요 정규직<P>, 임시직<T>:")

if jobType == "P":
    name = input("이름: ")
    payment = input("기본급: ")    
    bonus = input("상여급: ")    

    permanent = Permanent(name, payment, bonus)

    print("고용형태: 정규직")
    print("이름: " + payment.getName())
    print("급여: " + permanent.calcPayment()) #25000000

else:
    name = input("이름: ")
    time = input("시간: ")    
    timePerPayment = input("시급: ")    

    temporary = Temporary(name, time, timePerPayment)

    temporary.printType()
    temporary.printName()
    print("급여: " + str(temporary.calcPayment()))

