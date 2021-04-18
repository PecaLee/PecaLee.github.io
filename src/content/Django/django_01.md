---
title: "Dj01 점프 투 장고 시작"
date: "2021-04-18"
draft: false
path: "/blog/django/django_01"
---

# 점프 투 장고

- pybo와 같은 사이트를 클론코딩하면서 장고의 기본을 따라해 본다.

## 1장. 개발환경 구성

### 01 - 장고란 무엇인가.

- The web framework for perfectionists with deadlines.
- 쉽고 빠르며 완벽에 가깝게 웹 프로그래밍을 할 수 있게 해주는 프레임워크.

#### 장고를 사용하는 이유?

- 빠르다.
- 튼튼하다. : 보안공격등에 대한 기본적이 대처가 튼튼하다.
  - SQL인젝션 : 악의적인 SQL을 주입하여 공격
  - XSS : 자바스크립트를 삽입해 공격
  - CSRF : 위조된 요청을 보내 공격
  - 클릭재킹 : 사용자의 의도하지 않은 클릭을 유도하여 공격
- 준비된 많은 기능들.
  - Don't reinvent the wheel

### 02 - 파이썬 설치

### 03 - 장고 개발 환경 구성

- 파이썬 가상환경

  - 점프 투 장고에서는 venv를 사용했지만 개인적으로 pipenv가 더 익숙하고 편하므로 pipenv로 가상 환경을 구축해서 사용.
  - pipenv

  ```terminal
  가상환경을 만들 디렉토리 안에서.
  $ pipenv --three
  //python 3.x버전의 가상환경 작성

  $ pipenv shell
  //가상환경 실행

  //가상환경 안에서
  $ exit
  //가상환경 에서 나옴
  ```

  - pipenv상에서 Django설치

  ```terminal
  $ pipenv install django==<version>
  //pipenv 상에서 장고 설치 (3.1.3버전을 설치했음)
  ```

### 04 - 장고 프로젝트 생성

- 프로젝트 생성

  ```terminal
  프로젝트 디렉토리 안에서
  $ django-admin startprojct config .
  // config . 현 디렉토리를 프로젝트 디렉토리로 만들라.

  $ python manage.py runserver
  //서버 실행
  ```

### 05 - 에디터와 개발서버

- 책에서는 파이참을 사용하지만 계속 사용하던 vscode를 사용해서 따라가기로 함.
- vscode 기본설정

  - vscode에서 실행전 인터프리터 설정을 가상환경 위치로 해 줘야 개발서버를 띄울 수 있다.
  - formatter : black
  - linter : flake8

- settings.py 언어, 타임존 수정.

  ```python
  #--------#
  LANGUAGE_CODE = 'ko-kr'

  TIME_ZONE = 'Asia/Seoul'
  #--------#
  ```

  - [국가 언어 코드 참조](http://www.i18nguy.com/unicode/language-identifiers.html)
  - [타입존 참조](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

- [settings에 대한 공식문서](https://docs.djangoproject.com/en/3.2/ref/settings/)
