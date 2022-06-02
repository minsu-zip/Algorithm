import sys
input = sys.stdin.readline
n, m = list(map(int, input().split()))
nArr = []
for _ in range(n):
    tier, rank = input().split()
    nArr.append([tier, int(rank)])
arr = sorted(nArr, key=lambda x: x[1])
mArr = [int(input()) for _ in range(m)]


def solution():
    for tier in mArr:
        start = 0
        end = n-1
        answer = 0
        while start <= end:
            mid = (start+end) // 2
            if tier <= arr[mid][1]:
                answer = mid
                end = mid - 1
            else:
                start = mid + 1
        print(arr[answer][0])


solution()
