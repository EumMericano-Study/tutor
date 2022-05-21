def print_star():
    a = int(input("숫자를 입력해주세요"))
    for x in range(a, 0, -1):
        for y in range(x, 0, -1):
            print('*', end='')
        print()


if __name__ == '__main__':
    print_star()
