from django.urls import path
from .views import home, myForum, detail, arTest, create_post, latest_posts, search_result

urlpatterns = [
    path("", home, name="home"),
    path("detail/<slug>/", detail, name="detail"),
    path("ar_test/", arTest, name="arTest"),
    path("my_forum/<slug>/", myForum, name="myForum"),
    path("create_post/", create_post, name="create_post"),
    path("latest_posts/", latest_posts, name="latest_posts"),
    path("search_result/", search_result, name="search_result"),
]