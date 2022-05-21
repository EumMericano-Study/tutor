def run():
    a = int(input('숫자를 입력해주세요'))
    print(fibonacci(a))


def fibonacci(a):
    if a <= 1:
        return 1
    return fibonacci(a-1) + fibonacci(a-2)


if __name__ == '__main__':
    run()
