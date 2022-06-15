from collections import deque
import sys
input = sys.stdin.readline
n, m = map(int, input().split())

def solution():
    queue = deque([[n, 1]])

    while queue:
        [number, cnt] = queue.popleft()

        if number == m:
            return cnt

        if number * 2 <= m:
            queue.append([number * 2, cnt + 1])
        if int(str(number) + '1') <= m:
            queue.append([int(str(number) + '1'), cnt + 1])

    return -1


print(solution())
