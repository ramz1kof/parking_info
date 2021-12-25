import requests
import json
import time
from random import randint


url = 'http://www.m1rrox.fun/api/'

headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

while True:
    myobj = {"timestamp": str(time.time()), "sensorId": "3",
             "sensorType": "item-3", "address": str(randint(0, 100)),
             "numberOfAvailableCars": str(str(randint(0, 100))),
             "informationOnFines": str(randint(0, 100)),
             "SECRET_KEY": "_)(*&^%"}
    x = requests.post(url, data=json.dumps(myobj), headers=headers)
    print("SENT_OBJ:", myobj)
    print(x.text)
    time.sleep(10)
