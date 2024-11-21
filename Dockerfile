FROM python:3.9.10
ENV PYTHONBUFFERED=1
ENV PORT 8080
WORKDIR /app
COPY . /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD gunicorn django-ec2-complete.wsgi:application --bind 0.0.0.0:"${PORT}"