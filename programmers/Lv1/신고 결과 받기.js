function solution(id_list, report, k) {
  let answer = []

  let idMap = new Map()
  // key : id_list,
  // value : {reportList : 유저가 신고한 ID 목록, cnt : 자신이 신고 당한 횟수, mail : 메일을 받을 횟수}
  id_list.forEach((el) => idMap.set(el, { reportList: [], cnt: 0, mail: 0 }))

  report.forEach((el) => {
    let [userId, reportId] = el.split(' ')

    let reportValue = idMap.get(userId)
    let cntValue = idMap.get(reportId)

    // 한 유저가 같은 유저 여러 번 신고하는 경우 처리
    // 유저 ID에 유저가 신고한 ID가 포함되지 않을 경우(아직 신고한 적이 없을 경우)만
    // 신고한 ID를 찾아 자신이 신고 당한 횟수 카운트
    if (![...reportValue.reportList].includes(reportId)) {
      idMap.set(reportId, {
        reportList: cntValue.reportList,
        cnt: cntValue.cnt + 1,
        mail: 0,
      })
    }

    // 유저 ID를 찾아 유저가 신고한 ID 추가
    // Set 객체를 통해 중복 제거
    idMap.set(userId, {
      reportList: new Set([...reportValue.reportList, reportId]),
      cnt: reportValue.cnt,
      mail: 0,
    })
  })

  // 정지 userId 판별
  let blackList = []
  for (let [key, value] of idMap) {
    if (value.cnt >= k) {
      blackList.push(key)
    }
  }

  // 메일 발송 갯수 카운트
  // 유저가 신고한 ID에 정지 ID가 포함되는 경우 유저 mail 값 카운트
  blackList.forEach((id) => {
    for (let [key, value] of idMap) {
      if ([...value.reportList].includes(id)) {
        idMap.set(key, {
          reportList: value.reportList,
          cnt: value.cnt,
          mail: value.mail + 1,
        })
      }
    }
  })

  // 메일 발송
  for (let [key, value] of idMap) {
    answer.push(value.mail)
  }

  return answer
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo']
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
]
// console.log(solution(id_list, report, 2))

const id_list2 = ['con', 'ryan']
const report2 = ['ryan con', 'ryan con', 'ryan con', 'ryan con']
console.log(solution(id_list2, report2, 3))
