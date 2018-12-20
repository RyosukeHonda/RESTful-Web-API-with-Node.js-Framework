# RESTful Web API with Node.js Framework

In this project I built a RESTful web API for private blockchain. The API project will require two endpoints:

* GET block
* POST block


## Step1: Select Node.js framework

In this project, I chose express.js as a framework.
[Express.js](https://expressjs.com/)

## Step2: Configure API Service

I chose the port number of 8000 and configured.

## Step3: Configure two endpoints

I configured 2 end points.
One is GET Block endpoint and the other is POST block endpoint.

### GET Block Endpoint

Configured a GET request using URL path with a block height parameter. The response for the endpoint is provided object in JSON format.

Example.
##### URL
> [http://localhost:8000/block/[blockheight]](http://localhost:8000/block/[blockheight])

##### Example URL path:
[http://localhost:8000/block/[blockheight]](http://localhost:8000/block/[blockheight]), where '0' is the block height.

##### Response
The response for the endpoint should provide block object in JSON format.
{"hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3","height":0,"body":"First block in the chain - Genesis block","time":"1530311457"}

### POST Block Endpoint

Post a new block with data payload option to add data to the block body. The block body should support a string of text. The response for the endpoint should provide block object in JSON format.

##### Response
The response for the endpoint should provide block object in JSON format.

##### Example POST response
For URL: [ http://localhost:8000/block]( http://localhost:8000/block)
{"hash":"ffaffeb2330a12397acc069791323783ef1a1c8aab17ccf2d6788cdab0360b90","height":1,"body":"Testing block with test string data","time":"1531764891"}

##### Validation
When posting to localhost:8000/block without any content on the payload, the service should not create a block. Therefore validate if there is content in the block before creating and adding it to the chain.


6. Answer the quiz in the classroom.
