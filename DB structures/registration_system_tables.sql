-- Tabla de Usuarios (Users)
CREATE TABLE Users (
    ID SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone VARCHAR(20),
    address VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    gender VARCHAR(10),
    birth_date DATE,
    registration_date TIMESTAMP
);

-- Tabla de Sesiones (Sessions)
CREATE TABLE Sessions (
    ID SERIAL PRIMARY KEY,
    user_ID INT,
    session_token VARCHAR(255),
    session_start TIMESTAMP,
    FOREIGN KEY (user_ID) REFERENCES Users(ID)
);
