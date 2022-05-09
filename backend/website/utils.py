from starlette.authentication import (
    AuthenticationBackend,
    SimpleUser,
    AuthCredentials
)

class BasicAuthBackend(AuthenticationBackend):
    async def authenticate(self, request):
        if not request.cookies.get('auth'):
            return
        login = request.cookies.get('auth')
        return AuthCredentials(['authenticated']), SimpleUser(login)