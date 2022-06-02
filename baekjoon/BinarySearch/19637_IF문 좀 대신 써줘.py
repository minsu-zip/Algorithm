from bisect import bisect_left
import sys
input = sys.stdin.readline
n, m = list(map(int, input().split()))
tier = []
rank = []
for _ in range(n):
    a, b = input().split()
    tier.append(a)
    rank.append(int(b))
mArr = [int(input()) for _ in range(m)]


def solution():
    for i in mArr:
        # 파이썬 이분탐색 알고리즘
        index = bisect_left(rank, i)
        print(tier[index])


solution()
