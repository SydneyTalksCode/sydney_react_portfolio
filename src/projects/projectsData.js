import projectOne from "../assets/project-1.png"
import projectTwo from "../assets/project-2.png"
import projectThree from "../assets/project-3.png"

const projects = {
    1: {
        title: "Weather App",
        image: projectOne,
        description: (
            <>
            <p>
                Weather app created using JS, CSS, React, and HTML
            </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
    2: {
        title: "Second Project",
        image: projectTwo,
        description: (
            <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
    3: {
        title: "Third Project",
        image: projectThree,
        description: (
            <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    }
};

export default projects;
