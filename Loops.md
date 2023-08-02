190: Loop → 코드를 자동화하는 방법

- for loops
- while loops
- the break keyword
- for…of loop
- for …in loop
- iterating arrays
- nested loops
- iterating objects

191: For Loops syntax

```jsx
for (
[initialExpression]; -> 변수가 있는 초기 표현식
[condition]; -> 조건식
[incrementExpression] -> 증감 표현식 
)
```

```jsx
//1부터 10까지 나옴.
//start at 1; stop at 10; add 1 each time
for ( let i = 1; i<= 10; i++){
		console.log(i);
}
```

- 이 루프에 대해 새로운 변수(i)를 만들고 있습니다. 원하는 대로 할 수 있지만 i라고 부르죠 for 루프에서는 대개 i라고 합니다. 사실 이 변수는 코드 어느 곳에서든 아무것도 하지 않기 때문이죠. 이 루프의 목적을 위해 존재하는 것이고 그게 다입니다. index의 i를 지칭한다고 생각하지만 확실하지는 않습니다. 카운터 변수라고 할 수 있고 별 의미는 없습니다.

192: for loop 예제

```jsx
//100부터 시작하여 -10씩 작아지는 숫자. 빼기.

for ( let i = 100; i>= 0; i-=10){
		console.log(i);
}

//
for ( let i = 10; i<= 1000; i*=10){
		console.log(i);
}

VM46:2 10
VM46:2 100
VM46:2 1000
```

- 결국 표현식이 거짓이 되면 루프는 종료됨.

193: 무한 루프의 위험성

```jsx
//do not run this code!!!!!

for ( let i = 20; i>= 0; i++){
		console.log(i);
}//bad!!!
```

- 엄밀히 말하면 영원히 끝도 없이 실행되는 것은 아님. 브라우저와 JavaScript에서 메모리가 부족해모두 마비되고 중단될 것.
- 계속 반복 실행하다가 컴퓨터가 여러분이 원하지 않는 방향으로 작동할 수 있다.
- 루프가 멈추지 않으면 JavaScript가 가진 메모리를 모두 사용하게되는 참사 발생!

 

194: 배열 루프

- 배열을 반복시킨다고도. 배열의 각 요소에 뭔가를 하는 것.
- for 루프를 사용하고 i라는 숫자를 생성하는 방법인데, i는 배열 속 요소의 인덱스를 참조할 때 씀.
- 인덱스는 0에서 시작해서 마지막 두 번째 자리까지 올라감.

```jsx
const animals = ['lions', 'tigers', 'bears'];

for ( let i = 0; i <= animals.lenght-1; i++){
		console.log(i, animals[i]);
}

for ( let i = 0; i < animals.lenght; i++){ //위와 아래는 같음! 인덱스!
		console.log(i, animals[i]);
}

//0 'lions'
//1 'tigers'
//2 'bears'
//이 인덱스를 사용하면 
```

- to loop over an array, star at index 0 and continue looping to until last index(length-1)
- 여기 요소 3개 중 가장 높은 인덱스는 2. 그래서 0에서 1로, 1에서 2로 루프한 다음, 그 인덱스를 사용해서 배열의 요소에 접속할 수 있다.
- 여러 숫자, 즉 인덱스를 생성한 다음에 그걸 배열에 연결해야 함.

```jsx
for ( let i = animanls.lenght-1 ; i >= 0; i--){ //위와 아래는 같음! 인덱스!
		console.log(animals[i]);
}
```

```jsx
//33번 

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}
```

195: 네스트 구성 루프

```jsx
for (let i = 1; i < 10; i++) {
    console.log(`ì is: ${i}`)
		for (let j = 1; i < 4; i++) {
    console.log(`j is: ${i}`)
}
//i,j,k 등 중첩 구문에서 자주 쓰임!
```

- 중첩 루프는 중첩된 배열을 통과하거나 반복해야 할 때 사용됨.

![IMG_7596.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5daa801b-f4c8-4de1-855a-bbc6c8252846/IMG_7596.jpeg)

- row.lenght → 우리는 seatingChart를 작업하는게 아니라 우리가 만든 변수인 row를 작업하는 것!

196: while loop

- while loops continue running as long as the test conditions is true.

![IMG_7597.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/02e48f65-2405-4ab9-9968-7de9c382147b/IMG_7597.jpeg)

- 두 식은 모양은 다르지만 같다!
- while을 많이 쓰지는 않는다. 하지만 게임 루프처럼 반복 횟수가 정해져 있지 않을 때 while 루프를 사용하면 더 유용하다.

![IMG_7598.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f50f8105-0232-47fe-9a2f-5c8e746fd305/IMG_7598.jpeg)

197: 정지/break 키워드

![IMG_7599.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fae89b7a-a248-4d60-8c65-99e640484ec8/IMG_7599.jpeg)

- 사용자가 입력한 문자열인 “stop copying me” 일때만 break;

198: 추측 게임 만들기 ** **다시 듣기**

![IMG_7600.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/597e8983-9a7f-40ad-bd70-0e683f5daca4/IMG_7600.jpeg)

**199**: for loop의 유용함→ for …of (a nice way of iterating over arrays (or iterable objects) 

```jsx
//for...of 구문 

for (variable of iterable) {
  statement
}
```

- 만들게 될 변수의 이름과 실제 of 단어가 나온 후 반복가능한 개체가 오면서 배열 안에 있는 개체를 반복하기 시작함.
- 이걸 다시 써서 for(let)으로 하고 변수의 이름을 만들어야 하는데요그 이름이 배열에 있는 각각의 요소를 표시하게 됩니다
- 그럼 변수 이름은 sub로 하고 뒤에 of와 subreddits를 쓸게요

200: 객체 루프

201: 할일 목록(

202:
