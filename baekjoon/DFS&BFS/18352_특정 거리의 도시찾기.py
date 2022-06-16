from collections import deque
import sys
input = sys.stdin.readline
n, m, k, x = map(int, input().split())
array = [list(map(int, input().split())) for _ in range(m)]


def bfs(x, graph):
    result = []
    # 도시 방문 처리
    visited = [False] * (n+1)
    visited[x] = True
    #  시작 도시와 연결된[도시 정보, 거리]
    queue = deque([[x, 0]])

    while queue:
        [city, dist] = queue.popleft()

        if dist == k:
            result.append(city)
        elif dist < k:
            for i in graph[city]:
                #  인접도시이고 방문한적 없는 도시일때 queue삽입
                if visited[i] == False:
                    visited[i] = True
                    queue.append([i, dist+1])

    return result


def solution():
    graph = [[] for _ in range(n+1)]
    for [a, b] in array:
        graph[a].append(b)
    # 도시 정보 오름차순
    answer = bfs(x, graph)
    answer.sort()

    if len(answer) == 0:
        return -1
    else:
        return ('\n').join(map(str, answer))


print(solution())
