from django.db import models


# Create your models here.
class Project(models.Model):
    pr_name = models.CharField(max_length=64)
    pr_desc = models.TextField()
    pr_url = models.URLField(blank=True, null=True)
    pr_img = models.ImageField(upload_to='media/', null=True)
    pr_stech = models.TextField(null=True)
    pr_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.pr_name

    class Meta:
        verbose_name_plural = 'Проекты'