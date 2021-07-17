from collections import deque

dq = deque()

N = int(input())

for n in range(N):
    command = input()
    
    # push X: 정수 X를 스택에 넣는 연산이다.
    if command.startswith('push'):
        number = command.split(' ')[1]
        dq.append(number)

    # pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    elif command == 'pop':
        if len(dq) == 0:
            print(-1)
        else :
            print(dq.pop())
    
    # size: 스택에 들어있는 정수의 개수를 출력한다.
    elif command == 'size':
        print(len(dq))

    # empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
    elif command == "empty":
        if len(dq) == 0:
            print(1)
        else:
            print(0)

    # top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    elif command == "top":
        if len(dq) == 0:
            print(-1)
        else: 
            value = dq.pop()
            print(value)
            dq.append(value)

