import sys
input = sys.stdin.readline
n, m = list(map(int, input().split()))
nArr = list(map(int, input().split()))
nArr.sort()
mArr = []
for _ in range(m):
    mArr.append(list(map(int, input().split())))


def solution():
    for [x, y] in mArr:
        start = 0
        end = n-1
        # x점의 좌표 구하기
        while start <= end:
            mid = (start+end) // 2
            if x > nArr[mid]:
                start = mid + 1
            else:
                end = mid - 1
        # 인덱스 포함 시작 지점
        answerX = start

        start = 0
        end = n-1
        # y점의 좌표 구하기
        while start <= end:
            mid = (start+end) // 2
            if y >= nArr[mid]:
                start = mid + 1
            else:
                end = mid - 1
        # 인덱스 포함 마지막 지점
        answerY = start
        print('y x', answerY, answerX)
        print(answerY - answerX)


solution()
