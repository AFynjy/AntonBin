from starlette.applications import Starlette
from starlette.routing import Route, Mount
from starlette.middleware import Middleware
# from starlette.middleware.authentication import AuthenticationMiddleware
import utils
from website import users
from starlette.middleware.cors import CORSMiddleware

class Application(Starlette):
    """ Web application
    """

    def __init__(self):
        middleware = [
            Middleware(CORSMiddleware, allow_origins=["*"])
        ]
        Starlette.__init__(self, routes=[
            Mount('/api', routes=[
                Route('/register', users.Register, methods=["GET", "POST"]),
                Route('/login', users.Login, methods=["GET", "POST"]),
                Route('/posting', users.post_text, methods=["GET", "POST"]),
                Route('/getposts', users.get_post, methods=["GET", "POST"]),
            ], )
        ],
                           middleware=middleware)
