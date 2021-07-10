arr= []
check = []
total_height = 0

for i in range(9):
    n = int(input())
    arr.append(n)
    check.append(False)
    total_height += n

count = 0;
flag = False
for i in range(len(arr)):
    check[i] = True;
    total_height -= arr[i]

    for j in range(i+1, len(arr)):
        check[j] = True;
        total_height -= arr[j] 

        if total_height == 100:
            flag = True
            break
        
        check[j] = False
        total_height += arr[j]

    if flag :
        break

    check[i] = False
    total_height += arr[i]


#정답 출력
result = []
for i in range(len(check)):
    if not check[i]:
        result.append(arr[i])

result.sort()
for r in result:
    print(r)    