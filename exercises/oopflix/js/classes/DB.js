class DB {
    constructor() {
        this.data = [];
    }

    // async getDataFromJSON(url) {
    //     let res = await fetch(url);
    //     let data = await res.json();

    //     return data;
    // }

    getMovieData() {
        let movieData = [
            {
                title: 'Inception',
                poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
                genres: ['Action', 'Science Fiction', 'Adventure'],
                homepage: 'https://www.warnerbros.com/movies/inception',
                rating: 8.367,
                revenue: 825532764,
                overview:
                    'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
                imdb_id: 'tt1375666',

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
                ]
            },
            {
                title: 'Interstellar',
                poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
                genres: ['Adventure', 'Drama', 'Science Fiction'],
                homepage: 'http://www.interstellarmovie.net/',
                rating: 8.427,
                revenue: 701729206,
                overview:
                    'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
                imdb_id: 'tt0816692',
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
                    }
                ]
            },
            {
                title: 'The Dark Knight',
                rating: 8.515,
                revenue: 1004558444,
                poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
                genres: ['Drama', 'Action', 'Crime', 'Thriller'],
                homepage: 'https://www.warnerbros.com/movies/dark-knight/',
                overview:
                    'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
                imdb_id: 'tt0468569',
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
                    }
                ]
            },
            {
                title: 'Avatar',
                rating: 7.577,
                revenue: 2923706026,
                poster: 'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg',
                genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
                homepage: 'https://www.avatar.com/movies/avatar',
                overview:
                    'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
                imdb_id: 'tt0499549',
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
                ]
            },
            {
                title: 'The Avengers',
                revenue: 1518815515,
                rating: 7.712,
                poster: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
                genres: ['Science Fiction', 'Action', 'Adventure'],
                homepage: 'https://www.marvel.com/movies/the-avengers',
                overview:
                    'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
                imdb_id: 'tt0848228',
                cast: [
                    {
                        name: 'Robert Downey Jr.',
                        character: 'Tony Stark / Iron Man',
                        image: 'https://image.tmdb.org/t/p/w300/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg'
                    },
                    {
                        name: 'Chris Evans',
                        character: 'Steve Rogers / Captain America',
                        image: 'https://image.tmdb.org/t/p/w300/3bOGNsHlrswhyW79uvIHH1V43JI.jpg'
                    }
                ]
            },
            {
                title: 'Deadpool',
                revenue: 783100000,
                rating: 7.6,
                poster: 'https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg',
                genres: ['Action', 'Adventure', 'Comedy'],
                homepage: 'https://www.20thcenturystudios.com/movies/deadpool',
                overview:
                    'The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.',
                imdb_id: 'tt1431045',
                cast: [
                    {
                        name: 'Ryan Reynolds',
                        character: 'Wade Wilson / Deadpool',
                        image: 'https://image.tmdb.org/t/p/w300/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg'
                    },
                    {
                        name: 'Morena Baccarin',
                        character: 'Vanessa',
                        image: 'https://image.tmdb.org/t/p/w300/kBSKKaOtsqIzZPhtEeHfCBmhWl9.jpg'
                    }
                ]
            },
            {
                title: 'Avengers: Infinity War',
                revenue: 2052415039,
                rating: 8.3,
                poster: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
                genres: ['Adventure', 'Action', 'Science Fiction'],
                homepage: 'https://www.marvel.com/movies/avengers-infinity-war',
                overview:
                    'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
                imdb_id: 'tt4154756',
                cast: [
                    {
                        name: 'Robert Downey Jr.',
                        character: 'Tony Stark / Iron Man',
                        image: 'https://image.tmdb.org/t/p/w300/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg'
                    },
                    {
                        name: 'Chris Hemsworth',
                        character: 'Thor Odinson',
                        image: 'https://image.tmdb.org/t/p/w300/xkHHiJXraaMFXgRYspN6KVrFn17.jpg'
                    }
                ]
            },
            {
                title: 'Fight Club',
                revenue: 100853753,
                rating: 8.4,
                poster: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
                genres: ['Drama'],
                homepage: 'http://www.foxmovies.com/movies/fight-club',
                overview:
                    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
                imdb_id: 'tt0137523',
                cast: [
                    {
                        name: 'Edward Norton',
                        character: 'Narrator',
                        image: 'https://image.tmdb.org/t/p/w300/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg'
                    },
                    {
                        name: 'Brad Pitt',
                        character: 'Tyler Durden',
                        image: 'https://image.tmdb.org/t/p/w300/cckcYc2v0yh1tc9QjRelptcOBko.jpg'
                    }
                ]
            },
            {
                title: 'Guardians of the Galaxy',
                revenue: 773328629,
                rating: 7.9,
                poster: 'https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
                genres: ['Action', 'Science Fiction', 'Adventure'],
                homepage: 'http://marvel.com/guardians',
                overview:
                    'Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.',
                imdb_id: 'tt2015381',
                cast: [
                    {
                        name: 'Chris Pratt',
                        character: 'Peter Quill / Star-Lord',
                        image: 'https://image.tmdb.org/t/p/w300/83o3koL82jt30EJ0rz4Bnzrt2dd.jpg'
                    },
                    {
                        name: 'Zoe Saldaña',
                        character: 'Gamora',
                        image: 'https://image.tmdb.org/t/p/w300/iOVbUH20il632nj2v01NCtYYeSg.jpg'
                    }
                ]
            },
            {
                title: 'Pulp Fiction',
                revenue: 213928762,
                rating: 8.5,
                poster: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
                genres: ['Thriller', 'Crime'],
                homepage: 'https://www.miramax.com/movie/pulp-fiction/',
                overview:
                    "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
                imdb_id: 'tt0110912',
                cast: [
                    {
                        name: 'John Travolta',
                        character: 'Vincent Vega',
                        image: 'https://image.tmdb.org/t/p/w300/ap8eEYfBKTLixmVVpRlq4NslDD5.jpg'
                    },
                    {
                        name: 'Samuel L. Jackson',
                        character: 'Jules Winnfield',
                        image: 'https://image.tmdb.org/t/p/w300/nCJJ3NVksYNxIzEHcyC1XziwPVj.jpg'
                    }
                ]
            }
        ];
        return movieData;
    }
}

export default DB;
