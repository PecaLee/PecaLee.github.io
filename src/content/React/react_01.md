---
title: "R01 리액트를 다루는 기술 시작"
date: "2021-04-19"
draft: false
path: "/blog/react/react_01"
---

# 리액트를 다루는 기술

## 1장. 리액트 시작

### 01 - 왜 리액트인가

- 대규모 애플리케이션 중 프런트엔트 에서 돌아가는 애플리케이션 구조관리를 위하여
- 자바스크립트 라이브러리로서 view만을 신경쓴다.
- 컴포넌트
  - 재사용이 가능한 API.
  - 수많은 기능들을 내장.
  - 컴포넌트 하나가 컴포넌트의 생김새와 작동방식을 정의한다.

### 02 - 리액트의 특징

- Virtual DOM
- 리액트는 DOM업데이트를 추상화함으로써 DOM처리횟수를 최소화하고 효율적으로 진행한다.
- 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용.
- UI를 업데이트하는 과정에서 생기는 복잡함을 해소하고, 더욱 쉽게 업데이트에 접근한다.

### 03 - 작업 환경 설정

- nvm (노드 버젼 관리)
- node.js
  ```terminal
  #nvm설치 후
  $ nvm install --lts
  #최신 lts버젼의 node.js를 설치
  ```
- npm
- yarn
  ```terminal
  #Homebrews로 설치
  $brew install yarn
  ```
- create-react-app
  - 웹팩, 바벨의 설치 및 설치과정을 생략하고 간편하게 프로젝트 작업 환경을 구축해 주는 도구
  ```terminal
  $ yarn create react-app <appName>
  ```

## 2장. JSX

### 01 - 코드 이해하기

- src/App.js

### 02 - JSX란?

- 자바스크립트의 확장 문법.

### 03 - JSX의 장점

- 보기 쉽고 익숙하다
- 높은 활용도

### 04 - JSX 문법

- 규칙준수
  - 감싸인 요소
  - 컴포넌트안에 여러 요소가 있다면 반드시 부모요소로 감싸야 한다.
  - 왜?
    - Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM트리로 이루어져야 하기 떄문
- 자바스크립트 표현
  - {javascript}
- 삼항 연산자
  ```javascript
  조건 ? true : false
  ```
- 연산자를 사용한 조건부 렌더링
  ```javascript
  조건 && true
  //조건이 false면 null을 리턴
  ```
- undefined를 렌더링하지 않기
  - 어떤 값이 undefined일 수도 있다면 ||연산자를 사용해 undefined일때 사용할 값을 지정
  ```javascript
  값 || undefined일떄 사용할 값
  ```
- 인라인 스타일링
- class 대신 className
- 태그는 꼭 닫아줘야 한다
- JSX안에서의 주석
  ```javascript
  function App(){
      return (
          {/*주석 작성*/}
          <div //태그 안에서 작성
          >
      );
  }
  ```

### 05 - ESLint Prettier
