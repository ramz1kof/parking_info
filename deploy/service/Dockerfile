FROM python:3.8

WORKDIR /service

RUN apt-get update -y
RUN apt-get install -y git

RUN git clone -b dev https://github.com/ramz1kof/parking_info.git

WORKDIR /service/parking_info/item-3

RUN pip3 install requests

CMD ["python3", "post.py"]
