DROP DATABASE if exists tvwatchlistapp;
CREATE DATABASE tvwatchlistapp;

\c tvwatchlistapp

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL
);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    genre_name VARCHAR NOT NULL
);

CREATE TABLE shows (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    img_url VARCHAR NOT NULL,
    user_id INT REFERENCES users(id),
    genre_id INT REFERENCES genres(id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment_body VARCHAR NOT NULL,
    user_id INT REFERENCES users(id),
    show_id INT REFERENCES shows(id)
);

-- INSERT GENRES
INSERT INTO genres (genre_name) VALUES ('Adventure'); -- 1
INSERT INTO genres (genre_name) VALUES ('Drama'); -- 2
INSERT INTO genres (genre_name) VALUES ('Comedy'); -- 3
INSERT INTO genres (genre_name) VALUES ('Fantasy'); -- 4

-- INSERT USERS
INSERT INTO users (username) VALUES ('Jon Snow'); -- 1
INSERT INTO users (username) VALUES ('Daenerys Targaryen'); -- 2
INSERT INTO users (username) VALUES ('Michael Scott'); -- 3
INSERT INTO users (username) VALUES ('Pam Beesly'); -- 4

-- INSERT SHOWS
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('Game of Thrones', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', 1, 4);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('Game of Thrones', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', 2, 4);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('Game of Thrones', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', 3, 4);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('The Flash', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg', 1, 1);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('The Flash', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg', 3, 1);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('The Flash', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg', 4, 1);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('Naruto Shippūden', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/zAYRe2bJxpWTVrwwmBc00VFkAf4.jpg', 1, 4);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('Naruto Shippūden', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/zAYRe2bJxpWTVrwwmBc00VFkAf4.jpg', 2, 4);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('Greys Anatomy', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/eqgIOObafPJitt8JNh1LuO2fvqu.jpg', 3, 2);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('Greys Anatomy', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/eqgIOObafPJitt8JNh1LuO2fvqu.jpg', 4, 2);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('The Simpsons', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/yTZQkSsxUFJZJe67IenRM0AEklc.jpg', 1, 3);
INSERT INTO shows (title, img_url, user_id, genre_id)
VALUES ('The Simpsons', 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/yTZQkSsxUFJZJe67IenRM0AEklc.jpg', 4, 3);

-- INSERT COMMENTS
INSERT INTO comments (comment_body, user_id, show_id)
VALUES ('BEST SHOW EVER!!', 1, 1);
INSERT INTO comments (comment_body, user_id, show_id)
VALUES ('Of course you would think so Jon', 2, 1);