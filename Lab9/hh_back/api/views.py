from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from api.models import Company, Vacancy
from api.serializers import VacancySerializer, CompanySerializer
class AboutPageView(TemplateView): 
    template_name = 'about.html'

class HomePageView(TemplateView):
    template_name = 'home.html'

from django.shortcuts import render



def get_all_companies(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)

def get_company(request, id):
    company = get_object_or_404(Company, pk=id)
    serializer = CompanySerializer(company)
    return JsonResponse(serializer.data, safe=False)

def get_vacancy_by_company(request, id):
    company = get_object_or_404(Company, pk=id)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
 
    return JsonResponse(serializer.data, safe=False)

def get_all_vacancies(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

def get_vacancy(request, id):
    vacancy = get_object_or_404(Vacancy, pk=id)
    serializer = VacancySerializer(vacancy)
    return JsonResponse(serializer.data, safe=False)

def get_topten_vacancy(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
 
    return JsonResponse(serializer.data, safe=False)

