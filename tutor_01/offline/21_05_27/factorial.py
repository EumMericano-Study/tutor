def factorial(N) :
    if N == 0: return 1
    if N == 1: return 1
    return factorial(N-1) * N

print(factorial(10))