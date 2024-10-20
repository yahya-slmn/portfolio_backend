from django.shortcuts import render
from .forms import ContactForm

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()  # Assuming you are saving the form to the database
            return render(request, 'contact/thank_you.html')  # Redirect to a thank you page after submission
    else:
        form = ContactForm()
    
    return render(request, 'contact/contact.html', {'form': form})

def home_view(request):
    return render(request, 'contact/home.html')  # Assuming you have a home.html
