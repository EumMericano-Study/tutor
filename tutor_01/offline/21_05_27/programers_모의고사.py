def solution(answers):
    student1 = [1, 2, 3, 4, 5]
    student2 = [2, 1, 2, 3, 2, 4, 2, 5]
    student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    count1 = 0 
    count2 = 0 
    count3 = 0 
    
    for i in range(0, len(answers)):
        if answers[i] == student1[i%5] : 
            count1 += 1
        if answers[i] == student2[i%8] :
            count2 += 1
        if answers[i] == student3[i%10] :
            count3 += 1

    results = []
    
    if (count1 >= count2) & (count1 >= count3): results.append(1)
    if (count2 >= count1) & (count2 >= count3): results.append(2)
    if (count3 >= count1) & (count3 >= count2): results.append(3)

    return results