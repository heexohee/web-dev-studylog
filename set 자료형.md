37.1 Set
Set 객체는 중복되지 않는 유일한 값들의 집함. 배열과 유사하지만 다음과 같은 차이.
구분 : 배열 / Set 객체
동일한 값 중복 포함 : ㅇ / X
요소 순서 의미 : ㅇ / X
인덱스로 요소 접근 : ㅇ / X

Set은 수학접 집합을 구현하기 위한 자료 구조. (교집합, 합집합, 차집합, 여집합)
37.1.1 Set 객체 생성
const set = new Set();
console.log(set); // Set(0) {}
Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성. 이때 이터러블의 중복된 값은 Set 객체에 요서로 저장되지 않는다.
중복을 허용하지 않으므로 배열에서 중복된 요소를 제거할 수 있다.
// 배열의 중복 요소 제거
const uniq = array => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [2, 1, 3, 4]

// Set을 사용한 배열의 중복 요소 제거
const uniq = array => [...new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [2, 1, 3, 4]
profile
