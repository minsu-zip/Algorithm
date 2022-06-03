import sys
input = sys.stdin.readline
n = int(input())
a, b = list(map(int, input().split()))
arr = set([tuple(map(int, input().split())) for _ in range(n)])


def solution():
    answer = 0
    for [x, y] in arr:
        if ((x+a, y) in arr and (x, y+b) in arr) and ((x+a, y+b) in arr):
            answer += 1
    return answer


print(solution())
