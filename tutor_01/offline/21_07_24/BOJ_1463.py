import sys

# 입력
# 메모이제이션 문제
N = int(input())
memo = [sys.maxsize] * (N + 1)
memo[N] = 0
memo[0] = -1


for n in range(N, 0, -1):
    # -1 로직 
    if memo[n-1] > memo[n] + 1:
        memo[n-1] = memo[n] + 1
    # /2 로직
    if n % 2 == 0 and memo[int(n/2)] > memo[n] + 1:
            memo[int(n/2)] = memo[n] + 1
    # /3 로직
    if n % 3 == 0 and memo[int(n/3)] > memo[n] +1:
        memo[int(n/3)] = memo[n] + 1
print(memo[1])
