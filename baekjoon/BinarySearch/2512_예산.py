import sys
input = sys.stdin.readline
n = int(input())
arr = list(map(int, input().split()))
m = int(input())


def solution():
    maximum = max(arr)
    answer = 0
    start = 1
    end = m
    while start <= end:
        mid = (start+end) // 2
        cost = 0
        for i in arr:
            if mid >= i:
                cost += i
            else:
                cost += mid

        # 총 예산이 나눠줄 예산보다 클 경우 더 큰 예산을 줄 수 있다
        # and 예제 2번과 같은 경우 예외 처리 (측정한 예산이 요청한 예산보다 작은 경우만 예산을 늘릴 수 있다)
        # 즉, 요청한 예산보다 오버해서 줄 필요 없다
        if m >= cost and mid <= maximum:
            answer = mid
            start = mid + 1
        else:
            end = mid - 1

    return answer


print(solution())
