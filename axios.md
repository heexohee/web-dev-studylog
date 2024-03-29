## axios는 자바스크립트 및 브라우저 환경에서 HTTP 클라이언트를 사용하기 위한 라이브러리.
###Axios는 프로미스(Promise) 기반의 HTTP 클라이언트 라이브러리

1. 주로 웹 애플리케이션에서 서버와의 통신을 쉽게 처리하기 위해 사용. axios는 fetch() API보다 더 강력하고 편리한 기능을 제공하며, 모든 주요 브라우저와 Node.js 환경에서 작동.
2. axios를 사용하려면 먼저 해당 라이브러리를 설치. Node.js 환경에서는 npm 또는 yarn을 이용하여 설치.

npm을 사용하는 경우: npm install axios

yarn을 사용하는 경우: yarn add axios

### 설치가 완료되면, 다음과 같이 axios를 활용하여 서버와 데이터를 주고받을 수 있다.

## GET 요청 보내기:

import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data); // 서버에서 받은 데이터
  })
  .catch(error => {
    console.error('요청 실패:', error);
  });

  ## POST 요청 보내기:


import axios from 'axios';

const data = {
  username: 'john_doe',
  email: 'john@example.com',
};

axios.post('https://api.example.com/users', data)
  .then(response => {
    console.log('성공적으로 생성:', response.data);
  })
  .catch(error => {
    console.error('요청 실패:', error);
  });

## 기타 HTTP 요청 방식(GET, POST, PUT, DELETE 등)은 axios.get(), axios.post(), axios.put(), axios.delete()와 같은 함수를 사용하여 보낼 수 있습니다.

또한 axios는 요청과 응답의 인터셉터(interceptors)를 활용하여 요청과 응답을 중간에 가로채고 수정할 수 있으며, 설정 옵션을 커스터마이징할 수도 있습니다. 
이러한 기능들은 특정한 상황에서 유용하게 사용될 수 있습니다.
