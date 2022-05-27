import sys
input = sys.stdin.readline
n, t = list(map(int, input().split()))
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))


def solution():
    answer = []

    for bus in arr:
        s, l, c = bus
        # 버스 첫 차 보다 영식이가 더 늦게 도착하는 경우
        if t > s:
            start = 0
            end = c-1
            # 마지막 버스 운행 시간
            result = s+(l*(c-1))
            while start <= end:
                mid = (start+end) // 2
                if s+l*mid >= t:
                    result = min(result, s+l*mid - t)
                    end = mid - 1
                else:
                    start = mid + 1
            # 마지막 버스 운행 이전에 도착한 경우만 시간 저장
            if result != s+(l*(c-1)):
                answer.append(result)
        # 버스 첫 차랑 동일하게 영식이가 도착하는 경우
        elif t == s:
            answer.append(0)
        # 버스 첫 차 보다 영식이가 더 일찍 도착한 경우
        else:
            answer.append(s - t)
    # 캠프에 갈 수 없는 경우
    if len(answer) == 0:
        print(-1)
    else:
        print(min(answer))


solution()
