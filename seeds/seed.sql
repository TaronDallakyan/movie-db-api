INSERT INTO Directors (Name, Nationality, DOB) VALUES 
('Steven Spielberg', 'American', '1946-12-18'),
('Christopher Nolan', 'British-American', '1970-07-30'),
('Martin Scorsese', 'American', '1942-11-17'),
('Quentin Tarantino', 'American', '1963-03-27'),
('Greta Gerwig', 'American', '1983-08-04');

INSERT INTO Actors (Name, Nationality, DOB) VALUES 
('Leonardo DiCaprio', 'American', '1974-11-11'),
('Scarlett Johansson', 'American', '1984-11-22'),
('Brad Pitt', 'American', '1963-12-18'),
('Meryl Streep', 'American', '1949-06-22'),
('Robert Downey Jr.', 'American', '1965-04-04');

INSERT INTO Genres (GenreName) VALUES 
('Action'),
('Drama'),
('Comedy'),
('Thriller'),
('Science Fiction');

INSERT INTO Movies (Title, ReleaseYear, DirectorID) VALUES 
('Inception', 2010, 2),
('The Wolf of Wall Street', 2013, 3),
('Pulp Fiction', 1994, 4),
('Little Women', 2019, 5),
('Jurassic Park', 1993, 1);

INSERT INTO Ratings (MovieID, Rating) VALUES 
(1, 8.8),
(2, 8.2),
(3, 8.9),
(4, 7.8),
(5, 8.1);

INSERT INTO MovieGenres (MovieID, GenreID) VALUES 
(1, 1),
(1, 5),
(2, 2),
(3, 1),
(3, 4),
(4, 2),
(4, 3),
(5, 1),
(5, 5);
