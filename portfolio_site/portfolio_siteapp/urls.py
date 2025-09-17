from django.urls import path
from .views import home_page, project_page


urlpatterns = [
    path('', home_page),
    path('project/<int:pk>', project_page)
]