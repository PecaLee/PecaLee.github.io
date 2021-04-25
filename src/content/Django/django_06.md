---
title: "Dj06 Django template"
date: "2021-04-25"
draft: false
path: "/blog/django/django_06"
---

## 2장 장고 기본요소

### 09 - 템플릿 상속.

-   공통 템플릿 작성

    ```html
    {% load static %}
    <!--스태틱파일을 로딩-->
    {% block content %} {% endblock %}
    <!-- 블록 작성 템플릭 확장에 사용 -->
    ```

-   확장 템플릿

    ```html
    {% extends "확장에 사용할 템플릿.html" %} {% block content %} 내용 {%
    endblock %}
    <!-- 블록 영역안에 내용 작성 -->
    ```

-   [장고 템플릿 공식문서](https://docs.djangoproject.com/en/3.2/topics/templates/)
