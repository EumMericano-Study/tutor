N = int(input())

for i in range (N):
    str_array = input().split(" ")
    for word in str_array:
        print(word[::-1], end=" ")
    print()