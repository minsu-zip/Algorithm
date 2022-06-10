from collections import deque
import sys
input = sys.stdin.readline
n = int(input())
graph = [list(list(input().split()[0])) for _ in range(n)]


def bfs(i, visited):
    # 시작 인덱스 방문 처리
    visited[i] = True
    queue = deque([i])
    cnt = 0

    # A의 친구들(친구 B의 집합)
    for j in range(n):
        if graph[i][j] == 'Y':
            queue.append(j)
            visited[j] = True
            cnt += 1

    # A의 친구들의 친구(친구 C의 집합)
    while len(queue):
        x = queue.popleft()
        for j in range(n):
            if graph[x][j] == 'Y' and visited[j] == False:
                visited[j] = True
                cnt += 1

    return cnt


def solution():
    answer = 0
    check = [False for _ in range(n)]

    for i in range(n):
        if 'Y' in graph[i]:
            visited = check[:]
            answer = max(answer, bfs(i, visited))

    return answer


print(solution())
