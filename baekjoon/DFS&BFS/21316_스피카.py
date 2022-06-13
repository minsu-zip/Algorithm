import sys
from collections import deque
input = sys.stdin.readline
array = [list(map(int, input().split())) for _ in range(12)]

# Spica 특징
# 1. Spica와 연결된 인접 선분은 3개
# 2. Spica와 연결된 인접 선분에서 연결된 인접 선분은 3, 2, 1의(총 6개) 선분 개수를 갖는다


def bfs(i, graph):
    queue = deque(graph[i][:])
    # 2. Spica와 연결된 인접 선분에서 연결된 인접 선분은 3, 2, 1의(총 6개) 선분 개수를 갖는다
    cnt = 6

    while queue:
        tmp = queue.popleft()
        cnt -= len(graph[tmp])

    if cnt == 0:
        return True
    else:
        return False


def solution():
    graph = [[] for _ in range(13)]
    for [x, y] in array:
        graph[x].append(y)
        graph[y].append(x)

    for i in range(13):
        # 1. Spica와 연결된 인접 선분은 3개
        if len(graph[i]) == 3:
            if bfs(i, graph):
                return i


print(solution())
