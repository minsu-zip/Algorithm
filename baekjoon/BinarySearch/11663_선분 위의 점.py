from bisect import bisect_left, bisect_right
import sys
input = sys.stdin.readline
n, m = list(map(int, input().split()))
nArr = list(map(int, input().split()))
nArr.sort()
mArr = []
for _ in range(m):
    mArr.append(list(map(int, input().split())))


def solution():
    for [x, y] in mArr:
        # 이분탐색 자료구조 사용
        start = bisect_left(nArr, x)
        end = bisect_right(nArr, y)
        print(end - start)


solution()
