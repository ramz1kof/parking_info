FROM python:3.8

WORKDIR /backend

RUN apt-get update -y 
RUN apt-get install -y git pipenv

RUN git clone -b dev https://github.com/ramz1kof/parking_info.git

WORKDIR /backend/parking_info/amplify/backend/function/rentapi/src
RUN pip3 install --upgrade pip -r requirements.txt
RUN pip3 install --user pipenv
RUN pip3 --no-cache-dir install --upgrade awscli
RUN pip3 install gunicorn

ENV STORAGE_RENT_NAME=rent-dev

EXPOSE 5000

CMD ["gunicorn", "-b", ":5000", "index:app"]
