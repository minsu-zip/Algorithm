import sys
input = sys.stdin.readline
t = int(input())


def solution():
    for i in range(t):
        start = 1
        end = int(input())
        n = end
        while start <= end:
            mid = (start + end) // 2
            if (mid+1)*mid // 2 <= n:
                start = mid + 1
            else:
                end = mid - 1
        print(end)


solution()
