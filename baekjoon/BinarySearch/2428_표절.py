import sys
input = sys.stdin.readline

n = int(input())
nArr = list(map(int, input().split()))
nArr.sort()


def solution():
    answer = 0

    for i in range(0, n-1):
        start = i+1
        end = n-1
        # 비교 대상이 없는 경우 자기 자신
        result = i
        while start <= end:
            mid = (start+end) // 2
            if nArr[i] >= nArr[mid] * 0.9:
                result = mid
                start = mid + 1
            else:
                end = mid - 1
        answer += result - i

    return answer


print(solution())
