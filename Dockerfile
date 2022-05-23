FROM python:3.10.4

WORKDIR backend_antobin

COPY . .

RUN pip install --upgrade pip

RUN pip wheel . -w .wheels --no-deps

RUN pip install .wheels/Paket_AntonBin-*

EXPOSE $PORT

CMD ["python3", "backend/website/__main__.py"]