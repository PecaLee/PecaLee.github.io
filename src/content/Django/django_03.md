---
title: "Dj03 데이터관리와 Models"
date: "2021-04-20"
draft: false
path: "/blog/django/django_03"
---

## 2장 장고 기본요소

### 02 - 데이터관리와 Models

#### 01 migrate와 테이블

- config/settings.py

  ```python
  INSTALLED_APPS = [
      "django.contrib.admin",
      "django.contrib.auth",
      "django.contrib.contenttypes",
      "django.contrib.sessions",
      "django.contrib.messages",
      "django.contrib.staticfiles",
  ]
  ```

  - 장고 프로젝트에 설치된 앱.

  ```python
  DATABASES = {
      "default": {
          "ENGINE": "django.db.backends.sqlite3",
          "NAME": BASE_DIR / "db.sqlite3",
      }
  }
  ```

  - 데이터베이스에 대한 정의
    - "ENGINE" : 데이터베이스 엔진
    - "NAME" : BASE_DIR안에 위치한 파일

- 데이터 테이블 생성

  ```terminal
  $ python manage.py migrate
  ```

  - migrate를 통해 설치된 앱이 사용하는 데이터 테이블을 생성

- 모델 작성

  - pybo에서 사용할 모델을 작성
  - pybo/models.py

  ```python
  from django.db import models

  class Question(models.Model):
      subject = models.CharField(max_length=200)
      content = models.TextField()
      create_date = models.DateField()

      def __str__(self):
          return self.subject

  class Answer(models.Model):
      question = models.ForeignKey(Question, on_delete=models.CASCADE)
      content = models.TextField()
      create_date = models.DateTimeField()
  ```

  - Question, Answer모델의 작성
  - 장고에서 임포트한 모델 클래스를 기반으로 데이터테이블의 형태를 정의
  - [모델의 속성 공식문서](https://docs.djangoproject.com/en/3.0/ref/models/fields/)
  - **str**메소드 : 데이터 조회시 표시할 이름

- 앱 설치

  - config/settings.py

  ```python
  DJANGO_APPS = [
      "django.contrib.admin",
      "django.contrib.auth",
      "django.contrib.contenttypes",
      "django.contrib.sessions",
      "django.contrib.messages",
      "django.contrib.staticfiles",
  ]

  PROJECT_APPS = [
      "pybo.apps.PyboConfig",
  ]

  INSTALLED_APPS = DJANGO_APPS + PROJECT_APPS
  ```

  - 장고앱과 프로젝트 앱을 나눠서 관리.
  - pybo/apps.py
    - 장고에서 만들어준 앱을 정의하는 파일
    - appNameConfig클래스를 settings.py에 등록

- 모델 migrate
  - 테이블 생성
  ```terminal
  $ python manage.py makemigrations
  $ python manage.py migrate
  ```
  - makemigrations로 테이블작업을 하기위한 파일들을 생성
  - migrate로 테이블 생성

#### 02 장고 셸 에서 데이터 CRUD

- 장고 셸 실행
  ```terminal
  $ python manage.py shell
  ```
- 모델 임포트
  ```python
  from AppName.models import ClassName
  ```
- 모델 데이터 등록
  ```python
  v = ClassName(속성=값, 속성=값)
  v.save()
  ```
  - save() : 데이터베이스에 저장하는 함수
- 등록한 데이터 조회

  ```python
  ClassName.objects.all()
  ClassName.objects.filter(속성=값)
  #속성의 조건으로 데이터 조회, 리스트형태(QuerySet)로 여러개를 반환
  #조건에 맞는 결과가 없을 시 빈 리스트 반환
  ClassName.objects.get(속성=값)
  #속성의 조건으로 데이터 조회, 1개의 데이터 반환
  #조건에 맞는 결과가 없을 시 에러

  ClassName.objects.filter(속성__contains=값)
  #속성에서 값을 포함하고 있는 데이터를 조회
  ```

  - [Query 공식문서](https://docs.djangoproject.com/en/3.0/topics/db/queries/)

- 데이터 수정
  ```python
  v = ClassName.objects.get(속성=값)
  #속성의 조건에 부합하는 데이터를 v에 저장
  v.속성 = 수정값
  v.save()
  ```
- 데이터 삭제
  ```python
  v = ClassName.objects.get(속성=값)
  #속성의 조건에 부합하는 데이터를 v에 저장
  v.delete()
  ```

### 03 - Django Admin

#### 01 Django Admin

- create superuser

  ```terminal
  $ python manage.py createsuperuser
  ```

- Django Admin!

  - 장고 어드민화면에서 보이는 구조를 만든다.
  - App/admin.py

  ```python
  from django.contrib import admin
  from .models import 클래스이름

  @admin.register(클래스이름) #장고어드민 등록
  class QuestionAdmin(admin.ModelAdmin):

      """ Question Admin Definition """
      #클래스 이름 정의

      search_fields = ["subject"]
      #장고어드민에서 서치필드 추가
  ```

  - 다른 방법

  ```python
  from django.contrib import admin
  from .models import 클래스이름

  class QuestionAdmin(admin.ModelAdmin):
      search_fields = ['subject']
      #장고어드민에서 서치필드 추가

  admin.site.register(클래스이름, QuestionAdmin)
  #장고어드민 등록
  ```

  - [장고 어드민 공식문서](https://docs.djangoproject.com/en/3.0/ref/contrib/admin/)
