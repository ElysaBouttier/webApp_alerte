from django.contrib import admin
from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('alert/', views.AlertList.as_view()),
    path('alert/<int:pk>', views.AlertDetails.as_view()),
]
