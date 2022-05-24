import sys
input = sys.stdin.readline
T = int(input())


def binary_search(start, end, nArr, find):
    while start <= end:
        mid = (start+end) // 2
        if nArr[mid] == find:
            return 1
        elif nArr[mid] > find:
            end = mid - 1
        else:
            start = mid + 1
    return 0


for _ in range(T):
    n = int(input())
    # 중복 제거
    nArr = list(set(map(int, input().split(" "))))
    nArr.sort()
    m = int(input())
    mArr = list(map(int, input().split(" ")))

    for find in mArr:
        print(binary_search(0, len(nArr)-1, nArr, find))
