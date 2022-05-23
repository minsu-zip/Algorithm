import sys
input = sys.stdin.readline

n = int(input())
nArr = list(map(int, input().split(" ")))
nArr.sort()
m = int(input())
mArr = list(map(int, input().split(" ")))


def solution():
    answer = []
    for find in mArr:
        start = 0
        end = n-1
        check = False
        while start <= end:
            mid = (start+end)//2
            if nArr[mid] == find:
                check = True
                break
            elif nArr[mid] > find:
                end = mid - 1
            else:
                start = mid + 1
        answer.append(1 if check else 0)

    return " ".join(map(str, answer))


print(solution())
