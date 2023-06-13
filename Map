## 주제/이슈 : 자바스크립트 자료형Map

- 자바스크립트 신 자료형인 Map을 사용하여 keys(), values(), entries() 메소드를 사용하여 키, 값 및 키-값 쌍을 반복할 수 있다.
객체 자료형은 key-value pair에서 key가 문자로 고정이었는데, Map은 객체와 달리 키로 사용할 수 있는 모든 유형을 사용할 수 있다.
Map은 각 쌍의 키와 값을 저장함.
Map은 키가 정렬된 순서로 저장되기 때문에, 추가한 순서대로 반복할 필요가 없다!(최대 장점)
Map의 반복 : keys(), values(), entries() 메소드를 사용하여 키, 값 및 키-값 쌍을 반복할 수 있다.
요소 하나하나를 반복할 수 있도록 배열 또는 객체와 비슷한 형태로 열거되어있는 자료구조로 생각.
아래 예시 코드에서 myMap.keys()으로 쓸 수 있는 이유는 myMap.key()가 반환하는 값이 iterator이기 때문.
키-값 쌍 추가 및 검색(set)
키-값 쌍 삭제(delete)
모든 키-값 쌍 제거(clear)
Map 크기 및 존재 여부 확인(size)
const myMap = new Map(); //새로운 Map을 생성.
myMap.set('one', 1); //이제 Map에 값을 추가하려면 set() 메소드를 사용
myMap.set('two', 2);
myMap.set('three', 3);
                                
//Map의 반복 : keys(), values(), entries() 메소드를 사용하여 
//키, 값 및 키-값 쌍을 반복할 수 있다. 
// myMap.key()가 반환하는 값이 iterator!
for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

for (const entry of myMap.entries()) {
  console.log(`${entry[0]}: ${entry[1]}`);
> }
`결과`
one
two
three
1
2
3
one: 1
two: 2
three: 3
💡 알게된 점
객체보다 효율적인 자료형 Map의 등장..! 아직 어색한데 for of 문으로 keys(), values(), entries() 메소드를 반복문으로 잘 조합한다면 알고리즘 문제풀이나 객체형 자료형보다 데이터를 저장할 때 더욱 자주 쓸 듯.
myMap.key()가 반환하는 값이 iterator!
😘 요약
Map에서 get과 set은 짝꿍!
for of 문으로 배열의 메소드(forEach)랑 비슷한 메소드 활용하는 신자료형임.
profile
ㅍ
