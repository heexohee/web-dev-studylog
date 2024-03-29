## JWT 토큰 -> 헤더에 담아 로컬 스토리지에 저장

### 회원가입 기본 로직과 2가지 방식 
1. 로그인한 사람만 보여주는 사이트에 접근하기 위해서 1. session / 2. token 둘 중 하나 이용하여 구현 가능.
2. 둘 다 서버가 유저한테 입장권을 발급해주는 방식 -> 유저는 제시하는 방식. (회원인증 기능의 기본 방식)
3. 세션 : 입장권에 담긴 정보가 별로 없어서 보안상 이슈 적음. 세션 스토어와 발급 목록을 비교하여 통과.
4. token : 담긴 정보가 많음. 서버가 유효기간만 체크하여 통과시킴. -> stateless함, 이용자가 많아질수록 서버에 부담이 커지는데, 상대적으로 부담이 적은 방식이다. 그래서 자주 쓰임!


### JWT 방식의 문제: 보안상 허점이 많다!
1. 알고리즘 none 공격 -> 거절하도록 함수 구현 해야함.
2. JWT는 디코딩(변환)이 매우 쉬움. -> 민감한 유저 정보 넣으면 절대 안됨(최소한의 정보만 담자)
3. 시크릿 키 문제 -> 엄청 길고 복잡하게 작성해야한다. 생성용키/검증용 키 2개 사용(private key+public key) -> 라이브러리 사용 가능 (시크릿 키는 공유 금지, 유출 유의, 브루스 펄스 어택 주의, 뚫리는 서버 굉장히 많음)
5. JWT 방식은 토큰을 정지 할 수 없음, 그래서 유효기간 전까지 사용가능하게 됨
6. httponly cookie 등의 저장소 사용, jwt 블랙 리스트 운영, 



출처 : 코딩애플
