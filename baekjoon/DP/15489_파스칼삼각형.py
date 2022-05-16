R, C, W = map(int, input().split())
arr = [[1, 1] for _ in range(R + W)]


def solution():
    for i in range(2, len(arr)):
        for j in range(2, i + 1):
            if j == i:
                arr[i].append(1)
            else:
                arr[i].append(arr[i - 1][j] + arr[i - 1][j - 1])
    sum = 0
    end = C + 1
    for i in range(R, R + W):
        for j in range(C, end):
            sum += arr[i][j]
        end += 1

    print(sum)


solution()
