N = int(input())

for  i in range(1, N+1):
    # 첫 공백 출력
    for j in range(N-i):
        print(" ", end="")
    
    if (i > 1) & (i < N) :
        print("*", end="")
        for j in range (2 * i - 3):
            print(" ", end="")
        print("*")

    # 마지막 줄 일때
    else :
        for j in range(2* i -1):
            print("*", end="")
        print()