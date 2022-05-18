import queue
N = int(input())
graph = [list(map(int, input().split(" "))) for _ in range(N)]


def isRange(dx, dy):
    if dx >= 0 and dy >= 0 and dx < N and dy < N:
        return True
    else:
        False


def solution():
    dataQueue = queue.Queue()
    dataQueue.put([0, 0])
    while not dataQueue.empty():
        x, y = dataQueue.get()
        # 움직일 수 없는 경우
        if graph[x][y] == 0:
            continue
        # 도착 지점
        if graph[x][y] == -1:
            return 'HaruHaru'
        else:
            # 밑으로만 가는 경우
            if isRange(x+1*graph[x][y], y):
                dataQueue.put([x+1*graph[x][y], y])
            # 오른쪽으로만 가는 경우
            if isRange(x, y+1*graph[x][y]):
                dataQueue.put([x, y+1*graph[x][y]])
    return 'Hing'


print(solution())
