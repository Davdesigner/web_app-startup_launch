# Task Manager Web Application

This is a simple web application for managing tasks. It allows users to add new tasks, view the list of tasks, and mark tasks as completed.

## Running the Application Locally

To run the application locally, follow these steps:

Clone this repository to your local machine.

Navigate to the project directory in your terminal.

Open the `webapp.html` file in your web browser to access the application.

## Building the Docker Image and Running a Container

To build the Docker image and run a container using the image, follow these steps:

Make sure you have Docker installed on your machine.

Navigate to the project directory in your terminal.

Build the Docker image using the following command: docker build -t my-web-appl-image -f Dockerfile.dockerfile . 

Once the image is built, you can run a container using the following command: docker run -d -p 8080:80 --name my-web-appl-container my-web-appl-image

## Assumptions and Decisions

During the development process, the following assumptions and decisions were made:

1. Used HTML, CSS, and JavaScript to build the web application for simplicity and lightweight deployment.

2. Chose Docker for containerization to ensure the application is easily deployable and scalable across different environments.

3. Implemented basic features such as adding tasks, viewing task lists, and marking tasks as completed to meet the project requirements.

4. No external libraries or frameworks were used to keep the application lightweight and easy to manage.

5. Used Alpine Linux as the base image for the Docker container to minimize the image size and optimize performance.

