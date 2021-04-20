---
title: "R02 Component"
date: "2021-04-20"
draft: false
path: "/blog/react/react_02"
---

## 3장 컴포넌트

-   컴포넌트는 데이터가 주어졌을 때 이에 맞추어 UI를 만들어 주는 것은 물론이고, 라이프사이클 API를 이용하여 컴포넌트가 화면에서 나타날 때, 사라질 때, 변화가 일어날 때 주어진 작업들을 처리할 수 있으면, 임의 메서드를 만들어 특별한 기능을 붙일 수도 있다.

### 01, 02 - 펑셔널 컴포넌트와 클래스형 컴포넌트

-   functional component recap
    ```javascript
    function App() {
        const name = "react"
        return <div className="react">{name}</div>
    }
    ```
-   class component

    ```javascript
    import React, { Component } from "react"

    class App extends Component {
        render() {
            const name = "react"
            return <div className="react">{name}</div>
        }
    }
    ```

    -   class형 컴포넌트에서는 render함수가 꼭 있어야 한다.
    -   render함수 안에서 JSX를 반환

### 03 - props

-   properties 컴포넌트 속성을 설정할 때 사용하는 요소.
-   [prop-types](https://github.com/facebook/prop-types)
-   functional component에서 props사용.

-   **App.js**

    ```javascript
    import React from "react"
    import MyComponent from "./MyComponent"

    const App = () => {
        return (
            <MyComponent name="How to React" favoriteNumber={9}>
                React{/*chirdren Props*/}
            </MyComponent>
        )
    }

    export default App
    ```

-   **MyComponent.js** - functional component

    ```javascript
    import React from "react"
    import PropTypes from "prop-types"

    const MyComponent = ({ name, favoriteNumber, children }) => {
        //args를 비구조화 할당 사용하여
        //const { name, favoriteNumber, children } = props
        //와 같음
        return (
            <div>
                Hello, My name is {name}.<br />
                {children ? `My Children is ${children}` : undefined}
                <br />
                My favorite number is {favoriteNumber}.
            </div>
        )
    }

    MyComponent.defaultProps = {
        name: "something speacial",
    }

    MyComponent.propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    }
    //props 검증

    export default MyComponent
    ```

-   class component에서 props사용
-   **MyComponent.js** - class component

    ```javascript
    import React, { Component } from "react"
    import PropTypes from "prop-types"

    class MyComponent extends Component {
        static defaultProps = {
            name: "name",
        }
        static propTypes = {
            name: PropTypes.string,
            favoriteNumber: PropTypes.number.isRequired,
        }
        render() {
            const { name, favoriteNumber, children } = this.props
            return (
                <div>
                    Hello, my name is {name}.<br />
                    My children is {children}.<br />
                    and, my favorite number is {favoriteNumber}.
                </div>
            )
        }
    }

    /*
    MyComponent.defaultProps = {
        name: "something speacial",
    };
    
    MyComponent.propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    };
    */
    //위와 같이 class안으로 가져갈 수도 있다.

    export default MyComponent
    ```
