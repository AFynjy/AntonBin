import uvicorn
import backend.website
port = 8000

app = backend.website.Application()

uvicorn.run(app, port=port)