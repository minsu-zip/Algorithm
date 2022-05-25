import sys
input = sys.stdin.readline
N = int(input())
M = int(input())
arr = list(map(int, input().split(" ")))


def solution():
    answer = 0

    # 가로등 하나인 경우
    if len(arr) == 1:
        return max(arr[0], N-arr[0])
    # 가로등 여러개인 경우
    else:
        for i in range(len(arr)):
            # 시작점 (첫 번째 가로등)
            if i == 0:
                height = arr[i]
            # 끝점 (마지막 가로등)
            elif i == len(arr) - 1:
                height = N - arr[i]
            # 중간점 (중간 가로등)
            else:
                tmp = arr[i]-arr[i-1]
                if tmp % 2:
                    height = tmp // 2 + 1
                else:
                    height = tmp // 2
            answer = max(height, answer)

    return answer


print(solution())
