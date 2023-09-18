# User Registration - Web Application

This project is a web application that allows users to register and view the list of registered users. The application is divided into two parts: the frontend developed in Angular and the backend developed in Spring Boot. It uses a PostgreSQL database to store user information.

## Technologies Used

### Frontend

- Angular 16: A web application development framework.
- ng-bootstrap 15: An Angular component library based on Bootstrap.
- @fortawesome/fontawesome-free: FontAwesome icons and fonts.
- @angular/platform-browser/animations: Animation module for Angular.
- @angular/forms: For creating forms and validation.
- rxjs: A library for reactive programming in Angular.
- @angular/common/http: For making HTTP requests from the frontend.

### Backend

- Java 1.8: The programming language used for backend development.
- Spring Boot: A framework for Java application development.
- Swagger: For API documentation.
- JUnit: A unit testing framework for Java.

### Database

- PostgreSQL: A relational database management system used to store information about registered users.

## Running Instructions

Below are the steps to run the application:

### Frontend

1. Make sure you have Node.js and npm installed on your system.
2. Navigate to the `frontend` directory and run the following command to install dependencies:

   ```
   npm install
   ```

3. Next, start the Angular application with the following command:

   ```
   ng serve
   ```

   The application will be available at `http://localhost:4200`.

### Backend

1. Ensure you have Java 1.8 and Maven 4.0 installed on your system.
2. Navigate to the `backend` directory and run the following command to compile and run the Spring Boot server:

   ```
   mvn spring-boot:run
   ```

   The server will be available at `http://localhost:8080`.

### Database

Ensure you have a running PostgreSQL server and configure the connection credentials in the backend's configuration file (`application.properties`).

## Usage

Once both the frontend and backend are running, you can access the application from your web browser. Use the registration form to create new users and the user listing page to view the list of registered users. Additionally, you will find functions to delete existing users on the user listing page.

## API Documentation

The API documentation is available in Swagger at the following URL:

```
http://localhost:8080/backend/swagger-ui/index.html
```

## Testing

Unit tests have been implemented in the backend using JUnit. To run the tests, you can use the following command:

```
mvn test
```

## Contributions

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a branch for your changes: `git checkout -b feature/new-feature`.
3. Make your changes and ensure that tests pass.
4. Submit a pull request to the main branch of the repository.
