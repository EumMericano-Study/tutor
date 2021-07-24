from collections import deque

N = input()

charArr = list(N)

stack = 0
result = 0
for i in range(len(charArr)-1):
    if charArr[i] == "(":
        if charArr[i+1] == "(":
            stack = stack + 1
        else:
            result = result + stack
    else:
        if charArr[i+1] == ")":
            stack = stack -1
            result = result +1

print(result)