import sys
input = sys.stdin.readline
N = int(input())
A = list(map(int, input().split()))
B = list(map(int, input().split()))


def solution():
    answer = []
    for n in range(N):
        start = n+1
        end = N-1

        while start <= end:
            mid = (start+end) // 2
            if A[n] >= B[mid]:
                start = mid + 1
            else:
                end = mid - 1
        # Ai <= Bi 찾은 위치 인덱스 - 현재 잉크의 위치
        answer.append(end-n)

    print(*answer)


solution()
