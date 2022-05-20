N, M = map(int, input().split(" "))
graph = [list(input()) for _ in range(N)]


def division(i, j, cnt):
    compare = graph[i][j]
    if compare == '-':
        for k in range(j, M):
            if graph[i][k] == compare:
                graph[i][k] = cnt
            else:
                return
    elif compare == '|':
        for k in range(i, N):
            if graph[k][j] == compare:
                graph[k][j] = cnt
            else:
                return


def solution():
    cnt = 0
    for i in range(N):
        for j in range(M):
            if type(graph[i][j]) == str:
                division(i, j, cnt)
                cnt += 1
    return cnt


print(solution())
