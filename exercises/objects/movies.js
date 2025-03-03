const movieList = [
    {
        title: 'Inception',
        genres: ['Action', 'Science Fiction', 'Adventure'],
        overview:
            'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
        release_date: '2010-07-15',
        tagline: 'Your mind is the scene of the crime.',
        poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
        cast: [
            {
                name: 'Leonardo DiCaprio',
                character: 'Dom Cobb',
                image: 'https://image.tmdb.org/t/p/w300/5Brc5dLifH3UInk3wUaCuGXpCqy.jpg'
            },
            {
                name: 'Joseph Gordon-Levitt',
                character: 'Arthur',
                image: 'https://image.tmdb.org/t/p/w300/z2FA8js799xqtfiFjBTicFYdfk.jpg'
            }
        ],
        director: {
            name: 'Christopher Nolan',
            image: 'https://image.tmdb.org/t/p/w300/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg'
        },
        rating: 8.367
    },
    {
        title: 'Interstellar',
        genres: ['Adventure', 'Drama', 'Science Fiction'],
        overview:
            'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
        release_date: '2014-11-05',
        revenue: 701729206,
        runtime: 169,
        spoken_languages: [
            {
                english_name: 'English',
                iso_639_1: 'en',
                name: 'English'
            }
        ],
        tagline: 'Mankind was born on Earth. It was never meant to die here.',
        poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        cast: [
            {
                name: 'Matthew McConaughey',
                character: 'Joseph "Coop" Cooper',
                image: 'https://image.tmdb.org/t/p/w300/e9ZHRY5toiBZCIPEEyvOG9A8ers.jpg'
            },
            {
                name: 'Anne Hathaway',
                character: 'Dr. Amelia Brand',
                image: 'https://image.tmdb.org/t/p/w300/s6tflSD20MGz04ZR2R1lZvhmC4Y.jpg'
            },
            {
                name: 'Jessica Chastain',
                character: 'Murphy "Murph" Cooper',
                image: 'https://image.tmdb.org/t/p/w300/bFjC63gYFmGRcyJ2OF5FOcY7pIn.jpg'
            },
            {
                name: 'Michael Caine',
                character: 'Professor John Brand',
                image: 'https://image.tmdb.org/t/p/w300/hZruclwEPCKw3e83rnFSIH5sRFZ.jpg'
            }
        ],
        director: {
            name: 'Christopher Nolan',
            image: 'https://image.tmdb.org/t/p/w300/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg'
        },
        rating: 8.427
    },
    {
        title: 'The Dark Knight',
        genres: ['Drama', 'Action', 'Crime', 'Thriller'],
        overview:
            'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
        release_date: '2008-07-16',
        poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        youtube_id: 'kmJLuwP3MbY',
        cast: [
            {
                name: 'Christian Bale',
                character: 'Bruce Wayne / Batman',
                image: 'https://image.tmdb.org/t/p/w300/b7fTC9WFkgqGOv77mLQtmD4Bwjx.jpg'
            },
            {
                name: 'Heath Ledger',
                character: 'Joker',
                image: 'https://image.tmdb.org/t/p/w300/p2z2bURSg7nuMsN9P2s61e2RvNz.jpg'
            },
            {
                name: 'Michael Caine',
                character: 'Alfred Pennyworth',
                image: 'https://image.tmdb.org/t/p/w300/hZruclwEPCKw3e83rnFSIH5sRFZ.jpg'
            },
            {
                name: 'Gary Oldman',
                character: 'James Gordon',
                image: 'https://image.tmdb.org/t/p/w300/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg'
            }
        ],
        director: {
            name: 'Christopher Nolan',
            image: 'https://image.tmdb.org/t/p/w300/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg'
        },
        rating: 8.515
    },
    {
        title: 'Avatar',
        genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
        overview:
            'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',

        tagline: 'Enter the world of Pandora.',
        poster: 'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg',
        youtube_id: '5PSNL1qE6VY',
        cast: [
            {
                name: 'Sam Worthington',
                character: 'Jake Sully',
                image: 'https://image.tmdb.org/t/p/w300/mflBcox36s9ZPbsZPVOuhf6axaJ.jpg'
            },
            {
                name: 'Zoe Saldaña',
                character: 'Neytiri',
                image: 'https://image.tmdb.org/t/p/w300/iOVbUH20il632nj2v01NCtYYeSg.jpg'
            }
        ],
        director: {
            name: 'James Cameron',
            image: 'https://image.tmdb.org/t/p/w300/9NAZnTjBQ9WcXAQEzZpKy4vdQto.jpg'
        },
        rating: 7.577
    }
];

//=============================TASK 1==============================
// Write a function getMovieTitles(movieList) that returns an array of all movie titles.

function getMovieTitles(movieList) {
    // your code here
}

//console.log(getMovieTitles(movieList));

//=============================END 1===============================

//=============================TASK 2==============================
// Write a function findMoviesByGenre(movieList, genre) that returns
// an array of movies that match a given genre

function findMoviesByGenre(movieList, genre) {
    // your code here
}

//console.log(findMoviesByGenre(movieList, "Science Fiction"));

//=============================END 2===============================

//=============================TASK 3==============================
// Write a function displayMovieDetails(movieTitle) that logs
// the details of a movie in a readable format.

function displayMovieDetails(movieTitle) {
    // your code here
}

// displayMovieDetails('Inception');

// Example Output:

/*
🎬 Title: Inception
📅 Release Date: 2010-07-15
🎭 Genres: Action, Science Fiction, Adventure
🎥 Directed by: Christopher Nolan
⭐ Rating: 8.367
👥 Cast: Leonardo DiCaprio, Joseph Gordon-Levitt
*/
//=============================END 3===============================

//=============================TASK 4==============================
// Write a function generateMovieHTML(movieList) that creates a
// HTML list of movies with their posters, titles, and ratings.

function generateMovieHTML(movieList) {
    // your code here
}

// document.body.innerHTML = generateMovieHTML(movieList);

//=============================END 4===============================
