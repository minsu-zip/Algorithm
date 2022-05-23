import sys
from collections import Counter
input = sys.stdin.readline

n = int(input())
nArr = list(map(int, input().split(" ")))
m = int(input())
mArr = list(map(int, input().split(" ")))


def solution():
    # 중복 요소 개수 카운팅
    dic = dict(Counter(nArr))
    # 중복 제거
    arr = list(set(nArr))
    arr.sort()
    answer = []

    for find in mArr:
        start = 0
        end = len(arr)-1
        check = False
        while start <= end:
            mid = (start+end) // 2
            if arr[mid] == find:
                check = True
                break
            elif arr[mid] > find:
                end = mid - 1
            else:
                start = mid + 1
        answer.append(dic[arr[mid]] if check else 0)

    print(*answer)


solution()
