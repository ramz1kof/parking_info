import json
import awsgi
import boto3
import os
from flask_cors import CORS
from flask import Flask, jsonify, request
from uuid import uuid4
os.environ['AWS_DEFAULT_REGION'] = 'us-east-1'
client = boto3.client("dynamodb")
TABLE = os.environ.get("STORAGE_RENT_NAME")
app = Flask(__name__)
CORS(app)
BASE_ROUTE = "/rent"

@app.route(BASE_ROUTE, methods=['POST'])
def create_rent_data():
    request_json = request.get_json()
    if request_json.get("SECRET_KEY") != "_)(*&^%":
        return jsonify(message="Wrong SECRET KEY")
    client.put_item(TableName=TABLE, Item={
        'id': {'S': str(uuid4())},
        'timestamp':{'S': request_json.get('timestamp')},#date of last lease
        'sensorId':{'S': request_json.get('sensorId')},#number of rented cars
        'sensorType':{'S': request_json.get('sensorType')},
        'address': {'S': request_json.get("address")},
        'numberOfAvailableCars': {'S': request_json.get("numberOfAvailableCars")},
  'informationOnFines': {'S': request_json.get("informationOnFines")},
        'SECRET_KEY': {'S': request_json.get("SECRET_KEY")}
    })
    return jsonify(message="rent item created")

@app.route(BASE_ROUTE + '/<rent_id>', methods=['DELETE'])
def delete_rent_data(rent_id):
    client.delete_item(
        TableName=TABLE,
        Key={'id': {'S': rent_id}}
    )
    return jsonify(message="rent info deleted?")



@app.route(BASE_ROUTE, methods=['GET'])
def list_of_rent():
    response = client.scan(TableName=TABLE)
    data = response['Items']
    while response.get('LastEvaluatedKey'):
        response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
        data.extend(response['Items'])
    return jsonify(data)

# def handler(event, context):
#   print('received event:')
#   print(event)
  
#   return {
#       'statusCode': 200,
#       'headers': {
#           'Access-Control-Allow-Headers': '*',
#           'Access-Control-Allow-Origin': '*',
#           'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
#       },
#       'body': json.dumps('Hello from your new Amplify Python lambda!')
#   }

def handler(event, context):
    return awsgi.response(app, event, context)