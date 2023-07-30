208: 반환 키워드(return)

- colsole.log()와 달리 다른 내장 메서드에서는 변수 내의 값을 캡처해서 다른 것으로 전달할 수 있다. 메서드들을 연쇄할 수 있는 것.→console.log()로 무언가를 단순히 출력하는 것과는 전혀 다름.
- 구체적인 출력 값을 가진 함수를 써서 출력 값을 출력하는 데 그치지 않고 저장하고 보관하기 위해서는 반환 키워드가 필요함.
- return의 역할?
    
     1. 함수 밖으로 값을 보낼 수 있다. (the return statement ends function execution and specifies the value to be returned by that function.
    
    1. 사실상 함수를 중단시킨다.
    2. 하나의 값만 나온다.(값은 배열일 수도 있고, 객체일 수도 있지만 언제나 하나만 반환 됨. 두가지를 넣고 싶으면 하나의 배열 안에 둘을 넣음.)

```jsx
function multiply (n1, n2){

return n1 * n2;
}
```

```jsx
function isShortsWeather (temperature){

if (temperature >=75){
return true;
}
else {
    return false;
}

}
```

```jsx
function lastElement(arr){

if (arr.length === 0){
    return null;
    }
else {
    return arr[arr.length - 1];
    // return arr.slice(-1)[0]
    // return arr.at(-1); ==> 사용 시 주의 필요
    }
}

console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));
```

```jsx
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1); // == word.substring(1);
    // return `${word[0].toUpperCase()}${word.slice(1)}`; ==> 템플릿 리터럴
}

console.log(capitalize('eggplant'));
console.log(capitalize('pamplemousse'));
console.log(capitalize('squid'));
```

```jsx
// DEFINE YOUR FUNCTION BELOW:

function capitalize(str){

     let no1 = str[0].upperCase;
     let no2 = str.slice(1);
}
     return (no1 + no2);
```
