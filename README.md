# This is a simple web application built using nodejs 

## The app does the following 
- Connect to mongodb 
- Initilaize the DB with a message which is hey from Abu Mohammed
- Then serve this message on port 8080 if you run this application using npm start and access your web browser you will see it at http://127.0.0.1:8080

---

## To complete this challenge you need to complete the following tasks

- You need to have three VM's
    - the first for the web application
    - the second one for the mongodb
    - third one for the reverse proxy of your choise
    - All the mentioned need to be containeraized


![design](./img.png "design")

<u>Don't</u> take these steps as litral and in order they are mentioned in, there are few modification need to be done
- Build the web application in this repository as a container
- Run mongodb as a container on the second VM
- Run the reverse proxy as a container so the application is accessible on port 80 

Good luck!