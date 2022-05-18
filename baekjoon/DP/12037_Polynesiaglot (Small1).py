T = int(input())


def solution():
    for i in range(0, T):
        C, V, L = map(int, input().split(" "))
        dp = [[0, 0] for _ in range(L)]
        dp[0][0] = V  # 모음으로 끝나는 경우
        dp[0][1] = 0  # 자음으로 끝나는 경우
        for j in range(1, L):
            dp[j][0] = ((dp[j-1][0]+dp[j-1][1]) * V) % 1000000007
            dp[j][1] = (C * dp[j-1][0]) % 1000000007
        print('Case #{}: {}'.format(i+1, dp[L - 1][0] + dp[L - 1][1]))


solution()
