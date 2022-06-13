import sys
from collections import deque
input = sys.stdin.readline
n = int(input())
array = [list(map(int, input().split())) for _ in range(n-1)]


def solution():
    graph = [[] for _ in range(n+1)]
    # 양방향
    for [x, y] in array:
        graph[x].append(y)
        graph[y].append(x)
    # 노드 방문처리
    visited = [False] * (n+1)
    visited[1] = True

    # 부모의 노드를 가지는 배열
    parent = [[] for _ in range(n+1)]
    queue = deque([1])

    # 루트 1부터 연결된 노드들을 방문하면서 부모-자식 연결
    while queue:
        tmp = queue.popleft()
        #  인접 노드 탐색 순회
        for i in graph[tmp]:
            # 방문한적이 없다면 현재 노드가 부모-인접노드가 자식 관계가 된다.
            if visited[i] == False:
                parent[i] = tmp
                visited[i] = True
                queue.append(i)

    return '\n'.join(map(str, parent[2:]))


print(solution())
