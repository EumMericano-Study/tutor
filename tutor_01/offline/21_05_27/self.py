# 재귀함수 로직 => 기계가 대신 처리

def SayHi (msg, count):    
    if count > 3: return
    print("hi", msg, count)
    print("end", count)

SayHi("승엽", 1)