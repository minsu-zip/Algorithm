import sys
input = sys.stdin.readline
N = int(input())


def solution():
    answer = 0
    start = 1
    end = N
    while True:
        mid = (start+end) // 2
        if mid * mid == N:
            answer = mid
            break
        elif mid * mid > N:
            end = mid-1
        elif mid * mid < N:
            start = mid+1
    return answer


print(solution())
