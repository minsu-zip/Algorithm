import sys
input = sys.stdin.readline
n, k = list(map(int, input().split()))
arr = [int(input()) for _ in range(n)]


def solution():
    queue = arr[0]
    cnt = 1

    for _ in range(n):
        if queue == k:
            return cnt

        queue = arr[queue]
        cnt += 1

    return -1


print(solution())
