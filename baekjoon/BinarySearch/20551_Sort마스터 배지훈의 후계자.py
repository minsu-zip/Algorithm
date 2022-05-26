import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
nArr = []
mArr = []
for _ in range(n):
    nArr.append(int(input()))
nArr.sort()
for _ in range(m):
    mArr.append(int(input()))


def solution():
    for find in mArr:
        start = 0
        end = len(nArr) - 1
        answer = -1
        while start <= end:
            mid = (start + end) // 2
            if(nArr[mid] == find):
                answer = mid
                end = mid - 1
            elif(nArr[mid] > find):
                end = mid - 1
            else:
                start = mid + 1
        print(answer)


solution()
