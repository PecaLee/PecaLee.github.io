---
title: "R03 state, event handling"
date: "2021-04-22"
draft: false
path: "/blog/react/react_03"
---

## 3장 컴포넌트

### 04 - state

-   state는 컴포넌트 내부에서 바뀔 수 있는 값.
-   props와의 차이

| props                                                    | state              |
| -------------------------------------------------------- | ------------------ |
| 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값 | 컴포넌트 내부의 값 |
| 바꾸려면 부모 컴포넌트에서 바꿔야 함                     | 내무에서 변경 가능 |

-   class componet, functional component(Hooks)

## 4장 event handling

-   event : 사용자가 웹 브라우저에서 DOM 요소들과 상호작용 하는 것.
-   state를 설정하고 함수와 JSX를 엮어 이벤트 핸들링
-   리액트에서 지원하는 이벤트의 종류

    -   Clipboard
    -   Composition
    -   Keyboard
    -   Focus
    -   Mouse
    -   Selection
    -   Touch
    -   UI
    -   Wheel
    -   Media
    -   Image
    -   Animation
    -   Transition
    -   Other

-   [이벤트 핸들링에 관한 리액트 공식문서](https://facebook.github.io/react/docs/events.html)
