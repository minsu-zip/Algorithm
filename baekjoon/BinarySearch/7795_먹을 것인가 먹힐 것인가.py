from collections import Counter
from bisect import bisect_left
import sys
input = sys.stdin.readline
T = int(input())


def binarySearch(listA, listB):
    # key 값
    sum = 0

    for i in listA:
        # 파이썬 이분탐색 알고리즘
        index = bisect_left(listB, i)
        sum += listA[i] * index

    return sum


def solution():
    for _ in range(T):
        n, m = list(map(int, input().split()))
        # 중복 요소 개수 세기
        listA = Counter(list(map(int, input().split())))
        listB = list(map(int, input().split()))
        listB.sort()
        print(binarySearch(listA, listB))


solution()
