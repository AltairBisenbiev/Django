from django.urls import path
from api import views
 
urlpatterns = [
    path('companies', views.get_all_companies, name='companies'),
    path('companies/<int:id>', views.get_company, name='company'),
    path('companies/<int:id>/vacancies', views.get_vacancy_by_company, name='vacancybycompany'),
    path('vacancies/', views.get_all_vacancies,name='vacancies'),
    path('vacancies/<int:id>/', views.get_vacancy, name='vacancy'),
    path('vacancies/top_ten/', views.get_topten_vacancy, name='topten_vacancy')
]