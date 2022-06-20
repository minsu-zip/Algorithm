from collections import deque
import sys
input = sys.stdin.readline
n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# 배열 인덱스 범위 검사


def isRange(mx, my):
    if mx >= 0 and mx < n and my >= 0 and my < m:
        return True
    else:
        return False


def bfs(i, j):
    cnt = 1
    graph[i][j] = 0  # 그림의 시작 위치
    queue = deque()
    queue.append([i, j])
    while queue:
        [x, y] = queue.popleft()
        for k in range(4):
            # 인접 그림 찾기
            mx = x + dx[k]
            my = y + dy[k]
            # 배열 범위 안에 있고 그림이 있는 경우
            if isRange(mx, my) and graph[mx][my] == 1:
                cnt += 1
                graph[mx][my] = 0  # 그림 없애기
                queue.append([mx, my])

    return cnt


def solution():
    answer = [0]  # 그림의 넓이(그림이 하나도 없는 경우는 0)
    cnt = 0  # 그림 개수
    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1:
                cnt += 1
                answer.append(bfs(i, j))
    print(cnt)
    print(max(answer))


solution()
