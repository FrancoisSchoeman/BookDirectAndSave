<!-- Make a list of steps to do cookie-based authentication in django rest -->

# Cookie-based authentication in Django REST

## Steps

1. Create a custom authentication class that inherits from `BaseAuthentication` class.

2. Override the `authenticate` method of the class.

3. In the `authenticate` method, get the `request` object and the `username` and `password` from the `request` object.

4. Check if the `username` and `password` are correct.

5. If the `username` and `password` are correct, return the `user` object and `None` for the `token`.

6. If the `username` and `password` are not correct, return `None` for the `user` object and `None` for the `token`.

7. Add the custom authentication class to the `DEFAULT_AUTHENTICATION_CLASSES` in the `settings.py` file.

8. Add the `@api_view` decorator to the view function.

9. Add the `authentication_classes` parameter to the `@api_view` decorator and pass the custom authentication class as the value.

10. Add the `permission_classes` parameter to the `@api_view` decorator and pass the `IsAuthenticated` class as the value.

11. Add the `@csrf_exempt` decorator to the view function.

12. Add the `@csrf_protect` decorator to the view function.

13. Add the `@ensure_csrf_cookie` decorator to the view function.

14. Add the `@csrf_protect` decorator to the view function.
