# 자바스크립트(3.20)

- 브라우저는 html 파일만 실행할 수 있다.
- 브라우저는 css, js 파일을 읽을 수 없다.
- 브라우저는 html파일이 css, js 파일을 불러와야만 읽을 수 있다. 브라우저가 css, js 엔진을 가지고 있기 떄문이다.

# 자바스크립트(3.21)

- null : 자연적으로 발생하지 않는 타입, 값이 없다는 것을 알리기 위해 사용한다.
- undefined : 자연적으로 발생하는 타입, 값이 없음을 의미한다.
- const로 객체를 만들더라도 객체의 속성값은 변경이 가능하다.

# 자바스크립트(3.22)

- 객체안에서도 함수를 정의할 수 있다. key값에 함수 이름, value값에 함수를 정의하면 된다.

# 자바스크립트(3.23)

- 자바스크립트로 HTML 요소를 제어할 수 있다.
- 제어 방법 : HTML 태그를 읽어온다. 해당 태그의 속성을 제어한다.
- querySelector, querySelectorAll은 CSS 셀레팅 문법 사용이 가능하다.
- console.dir : HTML 태그의 속성을 객체형태로 확인할 수 있다.
- document, window
- 마우스 이벤트 : onmouseenter, onmouseleave, onmousedown
- 윈도우 이벤트 : resize, oncopy, onoffline, ononline

# 자바스크립트(3.24)

- 사용자와 상호작용하는 방법 : HTML 요소를 찾는다. event를 listen한다. event에 반응한다.
- 보편적으로 CSS는 style을 JS는 animation을 제어하는 용도로 사용한다.
- classList.toggle : 기존 class명 뒤에 새로운 class명을 추가/삭제하는 방식으로 토글링한다.
- classList.add/remove : calss명을 추가/삭제한다.

# 자바스크립트(3.27)

- form -> input : required, maxlength, placeholder, type, value
- form 안에서 input을 입력하고 enter를 누르면 자동으로 submit 된다.
- form이 submit 할때마다 브라우저는 자동으로 새로고침을 하고 데이터를 보낸다.
- eventListener 두번째 인자의 함수의 첫번째 인자는 event에 대한 정보를 담고 있다.
- event.preventDefault() : 브라우저 새로고침 막기
- localstorage.setItem("", "") : 로컬스토리지 추가하기
- localstorage.getItem("") : 로컬스토리지 가져오기
- localstorage.removeItem("") : 로컬스토리지 삭제하기

# 자바스크립트(3.29) : CLOCK

- setInterval("", n) : 일정 주기마다 코드 실행하기
- setTimeout("", n) : 일정 시간뒤에 코드 실행하기
- new Date() : 시간 정보를 담은 객체 만들기
- padStart(n, "") : 문자열의 길이를 n으로 하고, n이 아닐경우 앞쪽에 ""를 추가하기
- padEnd(n, "") : 문자열의 길이를 n으로 하고, n이 아닐경우 뒤쪽에 ""를 추가하기
- String() : 숫자를 문자로 바꾸기

# 자바스크립트(3.30) : QUOTES AND BACKGROUND

- Math.random() : 0~1 사이의 랜덤한 값 가져오기
- Math.floor() : 소수점 제거하기(내림)
- createElement("") : 요소 생성하기
- document.body.appendChild() : 요소를 문서 맨뒤에 추가하기
