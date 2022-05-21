T = int(input())

for i in range(T):
    N = int(input())
    player = [0]
    visited = [False] * (N+1)
    for j in range(N):
        player.append(int(input()))
    cnt = 1
    point = 1
    check = True
    for k in range(N):
        point = player[point]
        # 주경이가 걸린 경우
        if point == N:
            print(cnt)
            # 걸린 경우 판단을 위한 값 변경
            cnt = 0
            break
        cnt += 1
    # 주경이가 걸리지 않는 경우
    if cnt != 0:
        print(0)
