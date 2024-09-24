CREATE TABLE Directors (
    DirectorID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Nationality VARCHAR(100),
    DOB DATE
);

CREATE TABLE Actors (
    ActorID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Nationality VARCHAR(100),
    DOB DATE
);

CREATE TABLE Genres (
    GenreID SERIAL PRIMARY KEY,
    GenreName VARCHAR(100) NOT NULL
);

CREATE TABLE Movies (
    MovieID SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    ReleaseYear INT NOT NULL,
    DirectorID INT REFERENCES Directors(DirectorID) ON DELETE CASCADE
);

CREATE TABLE Ratings (
    MovieID INT REFERENCES Movies(MovieID) ON DELETE CASCADE,
    Rating NUMERIC(3, 1) NOT NULL,
    PRIMARY KEY (MovieID)
);

CREATE TABLE MovieGenres (
    MovieID INT REFERENCES Movies(MovieID) ON DELETE CASCADE,
    GenreID INT REFERENCES Genres(GenreID) ON DELETE CASCADE,
    PRIMARY KEY (MovieID, GenreID)
);
