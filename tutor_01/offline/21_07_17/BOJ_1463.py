import sys

# 입력
N = int(input())
arr = [sys.maxsize] * (N + 1)

arr[0] = 0
arr[1] = 0

for n in range(1, N+1):
    if n * 3 <= N:
        arr[n*3] = arr[n] + 1
    if n * 2 <= N:
        arr[n*2] = arr[n] + 1
    if n + 1 <= N:
        arr[n+1] = arr[n] + 1

print(arr)