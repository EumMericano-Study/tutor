N = int(input())

for  i in range(1, N+1):
    for j in range(N-i):
        print(" ", end="")
    
    if (i > 1) & (i < N) :
        print("*", end="")
        for j in range (2 * i - 3):
            print(" ", end="")
        print("*")

    else :
        for j in range(2* i -1):
            print("*", end="")
        print()