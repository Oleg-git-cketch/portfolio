from django.shortcuts import render
from .models import Project

# Create your views here.
def home_page(request):
    project = Project.objects.all()

    context = {
        'project': project
    }

    return render(request, 'home.html', context)

def project_page(request, pk):
    project = Project.objects.get(id=pk)

    context = {
        'project': project
    }

    return render(request, 'project.html', context)