---
title: "Dj02 URLs and Views"
date: "2021-04-19"
draft: false
path: "/blog/django/django_02"
---

## 2장. 장고 기본요소

### 01 - 주소와 화면을 연결하는 URL과 views

#### 01 앱 생성

- 앱 생성
  ```terminal
  $ django-admin startapp <App>
  #실습에서는 앱이름을 pybo로 설정
  ```
- 장고의 앱이란?

  - 장고에서 사용하는 파이썬 패키지
  - 모델, 뷰, 템플릿, URL등을 독자적으로 가지고 있다.
  - 특정 기능을 수행하는 웹 어플리케이션
  - 프로젝트는 이러한 앱들과 각 설정을 모아둔 것.

- 앱을 url과 연결

  - config/urls.py
  - 페이지 요청시 가장 먼저 호출되며 요청 URL과 view함수를 1:1로 연결해준다.

    ```python
    from django.contrib import admin
    from django.urls import path

    from pybo import views
    #pybo앱에서 views.py를 입포트

    urlpatterns = [
        path("admin/", admin.site.urls),
        path("pybo/", views.Index),
        #URL/pybo를 pybo앱의 views.py안의 Index함수와 연결
    ]
    ```

  - pybo/views.py

    ```python
    from django.shortcuts import render

    from django.http import HttpResponse

    # Create your views here.
    def Index(request):
        return HttpResponse("Hello World")
    #HttpResponse는 페이지 요청에 대한 응답을 할 때 사용하는 장고 클래스
    ```

#### 02 장고 개발 흐름

- 주소창에서 URL을 받아옴
- config/urls.py에서 URL을 해석해 App/views.py 안의 함수 호출
- App/views.py안의 함수를 실행하고 그 결과를 브라우저에 전달

#### 03 URL 분리하기

- Divide and Conquer!
- urls.py를 App안으로 가져와서 App에 대한 관리는 App안에서 하자.
- config/urls.py

  ```python
  from django.contrib import admin
  from django.urls import path, include

  urlpatterns = [
      path("admin/", admin.site.urls),
      path("pybo/", include("pybo.urls")),
  ]
  #include에 의해 pybo패쓰로 접속할 시 pybo/urls.py안에서 url요청을 처리한다.
  ```

- App/urls.py

  ```python
  from django.urls import path
  from . import views

  urlpatterns = [
      path("", views.Index),
  ]
  ```
