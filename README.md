<h1>Kpop API</h1>

<p>Welcome to the Kpop API documentation! This
  API allows you to access a wide range of information about 
  Kpop artists, songs, albums, and more. Whether you're building a
  Kpop fan website, developing a music application, or conducting research,
  this API will provide you with the necessary data.
</p>

<h1>Getting Started</h1>
-Authentication: No key required to use the API<br>
-API Hosting: The Kpop API is hosted on AWS (Amazon Web Services) for reliability and scalability. The API is deployed on multiple servers to ensure high availability.<br>
-Base URL: All API endpoints start with the base URL: http://13.239.112.215:6969/api/ or http://ec2-13-239-112-215.ap-southeast-2.compute.amazonaws.com:6969/api/ Append the desired endpoint to this URL to make requests.<br>
-Request Format: All requests must be made using the HTTP protocol. The API accepts requests in JSON format.<br>
<h1>END POINT</h1>
1. Artists
GET http://13.239.112.215:6969/api/all: Retrieve a list of Kpop artists.<br>
GET http://13.239.112.215:6969/api/all{id}: Get detailed information about a specific artist.<br>

<h1>Girlgroup</h1>
GET http://13.239.112.215:6969/api/twice: Retrieve a list of twice artists.<br>
GET http://13.239.112.215:6969/api/twice{id}: Get detailed information about a specific artist.<br>
<h1>NOTE:</h1>
This project is currently under development, and we are continuously working 
to enhance and expand its features. Stay tuned for future updates and improvements!
