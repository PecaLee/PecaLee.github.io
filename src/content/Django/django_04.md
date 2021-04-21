---
title: "Dj04 Django Views 02"
date: "2021-04-21"
draft: false
path: "/blog/django/django_04"
---

## 2장 장고 기본요소

### 04 - Django Views 02

#### 01 views

-   쿼리데이터를 받아와서 컨텍스트에 집어넣고
-   render함수로 템플릿에 전달

    ```python
    def Index(request):

    """ pybo Index Definition """

    question_list = Question.objects.order_by("-create_date")
    # 변수에 쿼리데이터를 할당 - order_by로 만들어진 순서대로
    context = {"question_list": question_list}
    # 컨텍스트에 저장

    return render(request, "pybo/question_list.html", context)
    # 렌더함수로 question_list.html템플릿에 컨텍스트를 전달
    ```

-   template

    -   앱 하위에 있는 템플릿 디렉토리에서 자동적으로 템플릿을 찾아내지만
    -   Divide and Conquer!
    -   config/settings.py

    ```python
    TEMPLATES = [
        ...
        "DIRS":[BASE_DIR / "templates"],
        ...
        # 템플릿 폴더를 만들어서 장고에게 위치를 알려준다.
    ]
    ```

-   [Django Template 공식문서](https://docs.djangoproject.com/en/3.0/topics/templates/)
-   Django Template 대신 Jinja2를 사용하는 것도 가능

#### 02 404

-   get_object_or_404(오브젝트, 조건)

#### 03 Class Based View

-   generic view
-   List view, Detail view
-   [class based view를 검색하기 쉽게 정리해놓은 사이트 CCBV](https://ccbv.co.uk/)
