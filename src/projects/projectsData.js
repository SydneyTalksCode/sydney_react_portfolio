import projectOne from "../assets/project-1.png"
import projectTwo from "../assets/project-2.png"
// import projectThree from "../assets/project-3.png"

const projects = {
    1: {
        title: "Memory Card Game",
        image: projectOne,
        description: (
            <>
            <p>
            I developed a Python-based memory matching game where players flip cards to find pairs, with an added feature for customizable decks. I implemented a system that allows users to load their own images by adding them to the assets folder and listing them in a .txt file, making the game flexible and personalized. I also built a “Load New Deck” button so players can switch between decks mid-game. This project strengthened my skills in file handling, user interface design, and creating extensible features that enhance user experience.
            </p>
            </>
        ),
        github: "https://github.com/SydneyTalksCode/Memory-Game/tree/main",
        // demo: "https://netlify.com",
    },
    2: {
        title: "Pokemon Game",
        image: projectTwo,
        description: (
            <>
            <p>
            A text-based Python game where players compete in a tournament of Pokémon arm wrestling battles. I built the full tournament logic, including randomized strength rolls, a unique power-up system, and a smooth progression through rounds. The game runs entirely in the terminal, showcasing my ability to create engaging mechanics without a graphical interface while focusing on clean code and replayable gameplay.
            </p>
            </>
        ),
        github: "https://github.com/SydneyTalksCode/pokemon-game",
        // demo: "https://netlify.com",
    },
    // 3: {
    //     title: "Third Project",
    //     image: projectThree,
    //     description: (
    //         <>
    //         <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //         </p>
    //         </>
    //     ),
    //     github: "https://github.com",
    //     demo: "https://netlify.com",
    // }
};

export default projects;
