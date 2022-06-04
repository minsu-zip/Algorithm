import sys
input = sys.stdin.readline

s, c = list(map(int, input().split()))
arr = [int(input()) for _ in range(s)]


def solution():
    answer = 0
    start = 1
    end = max(arr)
    while start <= end:
        cnt = 0
        mid = (start+end) // 2
        for i in arr:
            cnt += i // mid

        if cnt >= c:
            start = mid + 1
        else:
            end = mid - 1

    # 라면에 넣을 파 = 총합 - (치킨 수 * 최대길이)
    answer = sum(arr) - (c * end)

    return answer


print(solution())
