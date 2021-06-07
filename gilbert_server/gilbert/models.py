from django.db import models

# Create your models here.
class Alert(models.Model):
    id = models.AutoField(primary_key=True)
    status = models.CharField(max_length=20)
    title = models.CharField(max_length=250)
    # user
    beginingDate = models.DateTimeField()
    endingDate = models.DateTimeField()

    def __str__(self):
        return self.title

# class User(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=40)
#     firstName = models.CharField(max_length=40)
#     mail = models.CharField(max_length=80)
#     password = models.CharField(max_length=40)
#     registrationDate = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.name