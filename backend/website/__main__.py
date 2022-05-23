import uvicorn
import website
port = 8000

app = website.Application()

uvicorn.run(app, port=port)