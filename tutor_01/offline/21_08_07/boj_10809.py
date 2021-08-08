text_arr = list(input())

result = [-1] * 26

print(result)
for i in range(0, len(text_arr)):
    num = ord(text_arr[i]) - 97
    
    if result[num] == -1:
        result[num] = i
