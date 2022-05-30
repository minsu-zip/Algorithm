from collections import Counter
import sys
input = sys.stdin.readline
T = int(input())


def binarySearch(listA, listB):
    # key 값
    sum = 0

    for i in listA:
        start = 0
        end = len(listB)-1
        while start <= end:
            mid = (start + end) // 2
            if i > listB[mid]:
                start = mid + 1
            else:
                end = mid - 1
        # i 요소의 개수 만큼 큰 쌍의 개수 곱해줌
        sum += listA[i] * start

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
