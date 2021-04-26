
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



# 2번 문제
```
    배열 함수 append 활용
```
vectorArray = []
vectorArrayLength = int(input("vertor 수: "))

for i in range(0, vectorArrayLength):
    vector=input()
    vectorArray.append(vector)

print("vector 크기: " + str(len(vectorArray)))