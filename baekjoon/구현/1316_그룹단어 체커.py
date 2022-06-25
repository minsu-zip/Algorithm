import sys
input = sys.stdin.readline
n = int(input())
input = [input().strip() for _ in range(n)]


def solution():
    answer = len(input)

    # 단어의 수 만큼 순회
    for word in input:
        wordList = list(word) # 문자열 쪼개기
        check = {}
        # 쪼갠 문자열 순회
        for i in range(len(wordList)):
            # 문자가 딕셔너리에 존재할 시
            if wordList[i] in check:
                number = check.get(wordList[i])
                # 현재 인덱스 -1이 딕셔너리에 존재하는 값이라면 연속해서 나타나서 그룹 단어이다.
                if i-1 == number:
                    check[wordList[i]] = i
                # 인덱스가 안 맞다면 그룹 단어가 아니다.
                else:
                    answer -= 1
                    break
            # 객체에 없는 경우 key:현재값, value:현재 인덱스
            else:
                check[wordList[i]] = i

    return answer


print(solution())
