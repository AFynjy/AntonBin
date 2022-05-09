from starlette.endpoints import HTTPEndpoint
from starlette.responses import JSONResponse, Response

users = {

}

posts = []

class Register(HTTPEndpoint):
    """ Endpoint for user registration """

    async def post(self, request):
        data_forms_reg = await request.form()
        login = data_forms_reg.get("login")
        email = data_forms_reg.get("email")
        users[login] = {"login": login, "email": email}
        return Response(status_code=200)


class Login(HTTPEndpoint):

    async def post(self, request):
        data_forms_reg = await request.form()
        login = data_forms_reg.get("login")
        if login in users.keys():
            return Response(status_code=200)
        else:
            return Response(status_code=201)


async def post_text(request):
    string_text = await request.form()
    text = string_text.get("text")
    posts.append(text)
    return Response(status_code=200)


async def get_post(request):
    print(posts)
    return JSONResponse(posts)
