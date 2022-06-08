from bisect import bisect_left
import sys
input = sys.stdin.readline
t = int(input())


def solution():
    n, m = list(map(int, input().split()))
    A = list(map(int, input().split()))
    B = list(map(int, input().split()))
    B.sort()
    answer = 0
    for i in range(n):
        # 왼쪽 인덱스 구하기
        index = bisect_left(B, A[i])

        # 마지막 위치인 경우
        if index == m:
            answer += B[m-1]
        # 제일 앞에 있는 경우
        elif index == 0:
            answer += B[0]
        # 왼쪽과 오른쪽 값의 차이 중 크기가 작은 값으로 설정
        elif abs(A[i] - B[index-1]) <= abs(A[i] - B[index]):
            answer += B[index-1]
        else:
            answer += B[index]
    print(answer)


[solution() for _ in range(t)]
