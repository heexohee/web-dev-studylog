## `useRef`의 특징:

useRef는 React에서 사용되는 훅(Hook) 중 하나로, DOM 노드나 클래스 컴포넌트의 인스턴스와 같은 값들을 기억하고 참조하는데 사용됩니다.
useRef를 통해 생성된 객체는 컴포넌트의 렌더링과 상태 변경에 영향을 받지 않고, 독립적으로 유지됩니다. 주로 DOM 조작, 컴포넌트 내에서의 변수값 유지, 포커스 설정, 외부 라이브러리와의 상호작용 등에 사용됩니다.

1. 렌더링과 관계 없이 일관적인 값 유지: `useRef`로 생성한 객체는 컴포넌트의 렌더링과 상태 변경에 영향을 받지 않으므로, 렌더링 시에도 항상 동일한 값이 유지됩니다.
2. 변경 시에 렌더링이 발생하지 않음: `useRef`로 생성한 값이 변경되어도, 컴포넌트의 상태 변경이 발생하지 않기 때문에 렌더링이 다시 일어나지 않습니다.
3. ref.current로 접근: `useRef`로 생성한 객체는 `ref.current`를 통해 해당 값에 접근할 수 있습니다.
4. 컴포넌트가 리렌더링되어도 참조 유지: `useRef`로 생성한 객체는 컴포넌트의 리렌더링이 발생해도 이전 값을 유지합니다. 따라서 컴포넌트의 상태나 프로퍼티 값과 상관없이 독립적인 상태를 유지하고 싶을 때 유용합니다.
