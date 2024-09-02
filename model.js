/*Kunden ønsker et film-rating system som kan gjøre dette:

Vise alle filmene med bilde, navn og rating (1-10)
Sortere filmer basert på sjanger
Klikke inn på en film for å lese litt om plottet, kanskje skuespillerne som er med?
Skjule filmer man har sett
Legge til filmer i favoritter*/

let model = {
    app: {
        chosenGenre: 'null',
        
    },
    data: {
        genre: [
            "Drama", "Action", "Fantasy", "Sci-fi", "Adventure", "Comedy", "Thriller"
        ],    
    },
    movies: [
        {
            title: "Pirates of the Caribbean",
            img: "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            rating: 8,
            genre: 1,
            info: `
            Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save his love, 
            the governor's daughter, from Jack's former pirate allies, who are now undead.`,
            actors: ["Johnny Depp as Jack Sparrow","Geoffrey Rush as BArbossa","Orlando Bloom as Will Turner"," Kiera Knightley as Elizabeth Swann",],
            hasSeen: false,
            isFavorite: false,
        },
        {
            title: "Harry Potter",
            img: "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
            rating: 7,
            genre: 2,
            info: `An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.`,
            actors: ["Daniel Radcliffe as Harry Potter", "Emma Watson as Hermione Granger","Rupert Grint as Ron Weasley",],
            hasSeen: false,
            isFavorite: false,
        },
        {
            title: "Titanic",
            img: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
            rating: 8,
            genre: 0,
            info: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            actors: ["Leonardo DiCaprio as Jack Dawson", "Kate Winslet as Rose Dewitt Bukater"],
            hasSeen: false,
            isFavorite: false,
        },
        {
            title: "Star Wars",
            img: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg",
            rating: 8,
            genre: 3,
            info: `Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy
            from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.`,
            actors: ["Mark Hamill as Luke Skywalker","Harrison Ford as Han Solo","Carrie Fisher as Princess Leia Organa"],
            hasSeen: false,
            isFavorite: false,
        },
        {
            title: "Gone in 60 Seconds",
            img: "https://m.media-amazon.com/images/M/MV5BMTIwMzExNDEwN15BMl5BanBnXkFtZTYwODMxMzg2._V1_.jpg",
            rating: 6,
            genre: 1,
            info: "A retired master car thief must come back to the industry and steal fifty cars with his crew in one night to save his brother's life.",
            actors: ["Nicolas Cage as Memphis Raines","Angelina Jolie as Sara 'Sway' Wayland","Giovanni Ribisi as Kip Raines"],
            hasSeen: false,
            isFavorite: false,
        },
        {
            title: "Praying Mantis",
            img: "https://m.media-amazon.com/images/M/MV5BZmI0NWQ4ZWYtNmZiNy00ZGU0LWFkMTQtMzU1Mzk5NzExOTlmXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
            rating: 5,
            genre: 6,
            info: `
            Story of a female serial killer (Seymour), who marries men and then murders them after their first night together
            picks widower Don McAndrews (Bostwick) as her next target - but soon wishes she hadn't.`,
            actors: ["Jane Seymour as Linda Crandell","Barry Bostwick as Don McAndrews","Chad Allen as Bobby McAndrews"],
            hasSeen: false,
            isFavorite: false,
        },
        {
            title: "Baby Geniuses",
            img: "https://m.media-amazon.com/images/M/MV5BZmRhMWVmOTQtNjUwMS00MzEwLWFkNWQtNWJlMTk3NDcyYzM1XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg",
            rating: 3,
            genre: 5,
            info: "Scientists hold super intelligent talking babies captive, but things take a turn for the worse when a mix-up occurs between a baby genius and its twin.",
            actors: ["Kathleen Turner as Elena","Christopher Lloyd as Heep","Kim Cattrall as Robin"],
            hasSeen: false,
            isFavorite: false,
        },
        {
            title: "Hot Fuzz",
            img: "https://m.media-amazon.com/images/M/MV5BMzg4MDJhMDMtYmJiMS00ZDZmLThmZWUtYTMwZDM1YTc5MWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            rating: 7,
            genre: 5,
            info: `An overachieving London police sergeant is transferred to a village
            where the easygoing officers object to his fervor for regulations, all while a string of grisly murders strikes the town.`,
            actors: ["Simon Pegg as Nicholas Angel","Nick Frost as PC Danny Butterman","Martin Freeman as Met Sergeant"],
            hasSeen: false,
            isFavorite: false,
        },
        {
            title: "Flowers in the Attic",
            img: "https://m.media-amazon.com/images/M/MV5BYzIwYTZhM2QtOWUxMy00YzVhLTk2ODItYTQ3MWEzZjJiYTU0XkEyXkFqcGdeQXVyMzk3NTUwOQ@@._V1_.jpg",
            rating: 5,
            genre: 0,
            info: "Children are hidden away under an attic by their conspiring mother and grandmother.",
            actors: ["Louise Fletcher as Grandmother","Victoria Tennant as Mother","Kristy Swanson as Cathy"],
            hasSeen: false,
            isFavorite: false,
        },
        {
            title: "Picnic at Hanging Rock",
            img: "https://m.media-amazon.com/images/M/MV5BNzk4NTljZDEtNDk0Ny00ODkxLWExMzItODVlODc4MDUxN2JkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg",
            rating: 7,
            genre: 0,
            info: `During a rural summer picnic, a few students and a teacher from an Australian girls' school vanish without a trace. 
            Their absence frustrates and haunts the people left behind.`,
            actors: ["Rachel Roberts as Mrs. Appleyard","Anne-Louise Lambert as Miranda St Clare","Vivean Gray as Miss Greta McCraw"],
            hasSeen: false,
            isFavorite: false,
        },
        {
            title: "Deliverance",
            img: "https://m.media-amazon.com/images/M/MV5BNTFjOWQxYWMtMzNkZC00ZTEzLWJkOTgtYWZiOGYyOGVlZjVmXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
            rating: 7,
            genre: 4,
            info: `Intent on seeing the Cahulawassee River before it's dammed and turned into a lake, 
            outdoor fanatic Lewis Medlock takes his friends on a canoeing trip they'll never forget into the dangerous American back-country.`,
            actors: ["Jon Voight as Ed","Burt Reynolds as Lewis","Ned Beatty as Bobby"],
            hasSeen: false,
            isFavorite: false,
        },
        {
            title: "Bad CGI Gators",
            img: "https://m.media-amazon.com/images/M/MV5BYmNiZjkzMzEtOTEwZC00MDJlLWFmZDgtMzA2ZTUxYjJiZjc2XkEyXkFqcGdeQXVyODY5NzkyMjA@._V1_.jpg",
            rating: 4,
            genre: 5,
            info: `Six college grads get a cabin in the swampland's of Georgia. They decide to throw their school laptops in a backyard lake
             in an act of youthful defiance, which unknowingly turns an alligator into a dreaded and insatiable CGI creature.`,
            actors: ["Michael Bonini as Sam","Maddie Lane as Hope","Ben VanderMey as Chad"],
            hasSeen: false,
            isFavorite: false,
        },
    ],
}