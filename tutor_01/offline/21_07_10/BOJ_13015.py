N = int(input())

# 상단 별 출력
for i in range(1, N):
    
    # 1 공백 출력
    print(" " * (i -1), end="")
    

    # 2 상단 별 출력 부분 1/2
    if i == 1:
        print("*" * N, end="")
    else :
        print("*" + " " * (N-2) + "*", end="")

    # 3 역 삼각형 공백
    print(" " * (2 * (N-i) - 1), end="")

    # 4 상단 별 출력 2/2
    if i == 1:
        print("*" * N, end="")
    else :
        print("*" + " " * (N-2) + "*", end="")
    
    print()

# 5 가운데 별 출력
print(" "* (N-1) + "*" + " "*(N-2) + "*" + " "*(N-2) + "*" )

# 하단 별 출력 
for i in range(1, N):
    
    # 6 공백 출력
    print(" "*(N-i-1),end="")
    # 7 하단 별 출력 부분 1/2
    if i != N-1:
        print("*" + " " * (N-2) + "*", end="")
    else :
        print("*" * N, end="")

    # 8 삼각형 공백
    print(" " * (2 * i - 1), end="")

    # 9 하단 별 출력 2/2
    if i != N-1:
        print("*" + " " * (N-2) + "*", end="")
    else :
        print("*" * N, end="")

    print("")