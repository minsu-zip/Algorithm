import sys
input = sys.stdin.readline
n, k = list(map(int, input().split()))
arr = [int(input()) for _ in range(n)]


def solution():
    start = 1
    end = max(arr)
    while start <= end:
        mid = (start+end) // 2
        cnt = 0
        for i in arr:
            cnt += i // mid

        if cnt < k:
            end = mid - 1
        else:
            start = mid + 1

    return end


print(solution())
