import sys
input = sys.stdin.readline
x, y = list(map(int, input().split()))


def solution():
    z = int((y*100) // x)

    if z >= 99:
        return -1

    start = 1
    end = x
    result = 0
    while start <= end:
        mid = (start+end) // 2
        # 승률 계산
        rate = int((mid+y)*100 // (mid+x))
        if rate <= z:
            start = mid + 1
        else:
            result = mid
            end = mid - 1

    return result


print(solution())
