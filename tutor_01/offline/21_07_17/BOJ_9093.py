N = int(input())

for i in range (N):
    str_array = input().split(" ")
    for word in str_array:
        print(word[::-1], end=" ")
    print()

# N = int(input())

# for i in range (N):
#     str_array = input().split(" ")
#     for word in str_array:
#         print("".join(reversed(word)), end=" ")
#     print()


# N = int(input())

# input_array = []
# for i in range (N):
#     text = input()
#     input_array.append(text)

# for text in input_array:
#     text_array = text.split(" ")
#     for each_text in text_array:
#         print(each_text[::-1], end=" ")
#     print()