---
title: "Dj05 namespac, form"
date: "2021-04-22"
draft: false
path: "/blog/django/django_05"
---

## 2장 장고 기본요소

### 05 - URL 더 똑똑하게 사용하기 Name pace

-   urls.py

    ```python
    from django.urls import path
    from . import views

    app_name = "pybo"
    # 네임스페이스 앱이 관리하는 독립된 이름공간

    urlpatterns = [
        path("", views.Index, name="index"),
        path("<int:q_id>/", views.Detail, name="detail"),
        # path("test/", views.Test),
        # 테스트를 불러와서 뿌림
        # name="이름" 별칭 지정
    ]
    ```

-   template
    ```html
    <a href="{% url "pybo:detail" q.id %}">{{q.subject}}</a>
    <!--
     href 안
     url : url맵핑
     pybo : namesplace
     detail : 별칭
     -->
    ```

### 06 - 답변 등록기능 만들기 form

-   장고폼을 이용하지 않고 작성
-   urls.py

    ```python
    from django.urls import path
    from . import views

    app_name = "pybo"

    urlpatterns = [
        path("", views.Index, name="index"),
        path("<int:q_id>/", views.Detail, name="detail"),
        # path("test/", views.Test),
        # 테스트를 불러와서 뿌림 url/test/ 에
        path("answer/create/<int:q_id>/", views.Answer_create,  name="answer_create"),
        #
    ]
    ```

-   views.py

    ```python
    def Answer_create(request, q_id):

    """ Answer Create Definition """

    question = get_object_or_404(Question, pk=q_id)
    question.answer_set.create(
        content=request.POST.get("content"), create_date=timezone.now()
    )
    # Question 에서 answer_set을 가져와서 새로 데이터 작성
    # content는 템플릿에서 textarea name="content"
    # 답변이 등록
    return redirect("pybo:detail", q_id=q_id)
    # 답변이 등록 된 후 리다이렉트.
    ```

-   template

    ```html
    <h1>{{question.subject}}</h1>
    <div>{{question.content}}</div>

    <h5>{{question.answer_set.count}}개의 답변이 있습니다.</h5>
    <!--Question 안의 forienkey의 answer_set을 count해서 int로 출력-->
    <div>
        <ul>

            {% for a in question.answer_set.all  %}
                <li>{{a.content}}</li>
            {% endfor %}
            <!--answer_set 을 전부 가져와서 뿌림-->
        </ul>
    </div>

    <form action="{% url "pybo:answer_create" question.id %}" method="post">
        {% csrf_token %}
        <!--
            보안관련
            form을 통해 전송된 데이터가 실제로 웹 브라우저에서 작성된 데이터인지 판단
            form밑에 항상 따라와야 한다.
        -->
        <textarea name="content" id="content" rows="15"></textarea>
        <input type="submit" value="답변등록">
    </form>
    ```

-   query에서 dir, vars 객체조회
    ```python
    shell
    >> from 앱.models import 함수
    >> v = 함수.objects.get(pk=1)
    >> dir(v)
    >> vars(v)
    ```
