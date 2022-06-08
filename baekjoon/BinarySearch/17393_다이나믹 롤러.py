import sys
from bisect import bisect_right
input = sys.stdin.readline
N = int(input())
A = list(map(int, input().split()))
B = list(map(int, input().split()))


def solution():
    answer = []
    for n in range(N):
        if A[n] >= B[n]:
            index = bisect_right(B, A[n])
            answer.append(index-n-1)
        else:
            answer.append(0)
    print(*answer)


solution()
