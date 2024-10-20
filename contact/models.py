from django.db import models

# Create your models here.
class ContactMessage(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    subject = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return f"{self.full_name} - {self.subject}"