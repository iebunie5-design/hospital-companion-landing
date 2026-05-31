# GitHub에 랜딩페이지 배포하는 방법

이 문서는 비전공자도 이해할 수 있도록 GitHub 배포 과정을 쉽게 설명한 안내서입니다.

## 1. GitHub 배포란?

GitHub 배포는 웹사이트 파일을 GitHub라는 인터넷 저장소에 올리고, GitHub Pages 기능을 이용해 누구나 접속할 수 있는 웹주소를 만드는 과정입니다.

쉽게 말하면 다음과 같습니다.

```txt
내 컴퓨터의 웹사이트 파일
→ GitHub 저장소에 업로드
→ GitHub Pages로 웹사이트 주소 생성
→ 인터넷에서 접속 가능
```

## 2. 웹사이트 파일 구성

보통 랜딩페이지는 아래 파일들로 구성됩니다.

```txt
index.html      화면 구조
css/style.css   디자인
js/main.js      버튼, 메뉴, 폼 동작
images/         이미지 파일
```

이번 병원동행 서비스 랜딩페이지도 같은 구조입니다.

## 3. 이번 프로젝트 배포 결과

이번 프로젝트는 이미 GitHub에 업로드하고 GitHub Pages로 배포했습니다.

### GitHub 저장소

https://github.com/iebunie5-design/hospital-companion-landing

### 실제 배포 주소

https://iebunie5-design.github.io/hospital-companion-landing/

## 4. GitHub Pages 켜는 방법

GitHub 저장소 화면에서 아래 순서대로 진행하면 됩니다.

1. GitHub 저장소에 들어갑니다.
2. 상단 메뉴에서 `Settings`를 클릭합니다.
3. 왼쪽 메뉴에서 `Pages`를 클릭합니다.
4. `Build and deployment` 영역을 찾습니다.
5. Source를 `Deploy from a branch`로 선택합니다.
6. Branch를 `main`으로 선택합니다.
7. Folder를 `/root` 또는 `/`로 선택합니다.
8. `Save` 버튼을 클릭합니다.

잠시 기다리면 GitHub Pages 주소가 생성됩니다.

주소 형태는 보통 아래와 같습니다.

```txt
https://깃허브아이디.github.io/저장소이름/
```

이번 프로젝트의 경우:

```txt
https://iebunie5-design.github.io/hospital-companion-landing/
```

## 5. 수정 후 다시 배포하는 방법

웹사이트 내용을 수정한 뒤에는 GitHub에 다시 올리면 됩니다.

개발자가 사용하는 기본 명령어는 아래와 같습니다.

```bash
git add .
git commit -m "Update landing page"
git push
```

이 명령어의 의미는 다음과 같습니다.

```txt
git add .      수정한 파일을 업로드 준비 목록에 추가
git commit     수정 내용을 하나의 저장 기록으로 만듦
git push       GitHub 저장소에 업로드
```

`git push`까지 완료되면 GitHub Pages가 자동으로 새 버전을 다시 배포합니다.

보통 1분에서 3분 정도 기다리면 실제 사이트에 반영됩니다.

## 6. GitHub Pages에서 잘 되는 것

GitHub Pages는 정적 웹사이트 배포에 적합합니다.

잘 되는 것:

- HTML 페이지
- CSS 디자인
- JavaScript 동작
- 이미지 표시
- 랜딩페이지
- 회사 소개 페이지
- 포트폴리오 사이트
- 간단한 이벤트 페이지

## 7. GitHub Pages만으로 어려운 것

GitHub Pages는 서버 기능이 없습니다.

그래서 아래 기능은 별도 연결이 필요합니다.

- 상담 신청 내용을 관리자에게 이메일로 보내기
- 신청 내용을 Google Sheet에 저장하기
- 회원가입
- 로그인
- 결제
- 관리자 페이지
- 데이터베이스 저장

현재 랜딩페이지의 상담 신청 폼은 화면에서 입력하고 접수 완료 메시지를 보여주는 데모형입니다.

실제로 상담 신청을 받으려면 아래 중 하나를 연결해야 합니다.

- Google Forms
- Google Apps Script
- Formspree
- Netlify Forms
- 별도 API 서버

## 8. 비유로 이해하기

GitHub는 웹사이트 파일을 보관하는 인터넷 폴더입니다.

GitHub Pages는 그 폴더 안의 `index.html` 파일을 웹사이트로 보여주는 기능입니다.

즉, 이렇게 생각하면 쉽습니다.

```txt
GitHub 저장소 = 인터넷 파일 보관함
GitHub Pages = 그 파일을 웹사이트로 보여주는 기능
```

## 9. 최종 확인 방법

배포 후에는 아래를 확인하면 됩니다.

1. 배포 주소에 접속되는지 확인합니다.
2. 이미지가 잘 보이는지 확인합니다.
3. 버튼이 정상 동작하는지 확인합니다.
4. 모바일 화면에서도 깨지지 않는지 확인합니다.
5. 상담 신청 폼이 필요한 방식으로 연결되어 있는지 확인합니다.

이번 프로젝트의 배포 주소:

https://iebunie5-design.github.io/hospital-companion-landing/
