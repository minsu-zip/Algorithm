import sys
input = sys.stdin.readline
n = int(input())
graph = [int(input().strip()) for _ in range(n)]


def solution():
    # 선배의 번호, 호출한 선배의 횟수
    answer = [0, 0]
    for i in range(n):
        # 배열 인덱스 0부터
        queue = graph[i] - 1
        # 방문 체크
        visited = [False] * n
        visited[i] = True
        cnt = 1
        while True:
            if visited[queue] == False:
                visited[queue] = True
                queue = graph[queue] - 1
                cnt += 1
            else:
                break
        if answer[1] < cnt:
            answer[0] = i + 1
            answer[1] = cnt

    return answer[0]


print(solution())
