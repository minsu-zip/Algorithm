from collections import deque
import sys
input = sys.stdin.readline

n, m, r = map(int, input().split())
array = [list(map(int, input().split())) for _ in range(m)]

# 방문된 노드들을 순차적으로 출력하는 것이 아니라,
# 해당 노드들이 방문되는 순서를 기록해서 출력해야한다.
# i번째 줄에는 정점 i의 방문 순서를 출력한다.


def bfs(r, grpah):
    visited = [0] * (n+1)
    visited[r] = 1  # 시작 노드 방문 순서
    cnt = 2  # 방문 순서
    queue = deque([r])  # 시작 노드

    while queue:
        tmp = queue.popleft()
        for i in grpah[tmp]:
            if visited[i] == 0:
                visited[i] = cnt
                queue.append(i)
                cnt += 1
    del visited[0]

    return visited


def solution():
    graph = [[] for _ in range(n+1)]
    for [x, y] in array:
        graph[x].append(y)
        graph[y].append(x)

    # 인접 정점 내림차순
    for data in graph:
        data.sort(reverse=True)

    answer = bfs(r, graph)

    return ('\n').join(map(str, answer))


print(solution())
