import { ChangeEvent, FC, useState } from "react";
// Components
import Card from "components/Card";
import List from "components/List";
import Field from "components/Field";
import Project from "components/Project";
// Icons
import { BsEnvelope, BsLinkedin, BsPhone, BsTwitterX } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa6";
// Types
import { Project as ProjectType } from "types/project";

const Home: FC = () => {
	// Project Details
	const projects: ProjectType[] = [
		{
			title: "nawirisha",
			img: "/assets/images/nawirisha.png",
			description:
				"Developed a website for Nawirisha, a non-profit organization that aims to empower teenage mothers.",
			link: {
				github: "https://github.com/douglaswangome/nawirisha",
				site: "https://nawirishadadainitiative.org",
			},
			tags: ["react", "typescript", "css3"],
		},
		{
			title: "weather app",
			img: "/assets/images/weather.png",
			description:
				"Engineered a weather app using React and TypeScript to display weather information. Consumed the OpenWeatherMap API to fetch weather data.",
			link: {
				github: "https://github.com/douglaswangome/weather-app-2.0",
				site: "https://courageous-llama-c2b720.netlify.app/",
			},
			tags: ["react", "javascript", "tailwindcss"],
		},
		{
			title: "quiz app",
			img: "/assets/images/quiz.png",
			description:
				"Designed a quiz app using React and TypeScript to test user general knowledge. Consumed the Open Trivia DB API to fetch quiz questions.",
			link: {
				github: "https://github.com/douglaswangome/quiz-app",
				site: "https://zingy-tartufo-01fc5e.netlify.app/",
			},
			tags: ["react", "typescript", "tailwindcss"],
		},
		{
			title: "Doug Blog",
			img: "/assets/images/blog.png",
			description:
				"Developed a blog website using React, Context API, and JavaScript. Used Firebase auth, storage and hosting.",
			link: {
				github: "https://github.com/douglaswangome/blog-app",
				site: "https://doug-react-blog.web.app/",
			},
			tags: ["react", "javascript", "css3", "firebase"],
		},
		{
			title: "posts",
			img: "/assets/images/posts.png",
			description:
				"Developed a blog website using React, Redux, and TypeScript. Consumed the Dummy JSON API to fetch posts.",
			link: {
				github: "https://github.com/douglaswangome/posts",
				site: "https://posts-psi.vercel.app/",
			},
			tags: ["react", "redux", "typescript", "css3"],
		},
		{
			title: "todo list",
			img: "/assets/images/todo.png",
			description: "Crafted an interactive todo list using React and Redux.",
			link: {
				github: "https://github.com/douglaswangome/todo_list_with_redux",
				site: "https://todo-redux-list.netlify.app/",
			},
			tags: ["react", "redux", "javascript", "css3"],
		},
		{
			title: "pizza inn",
			img: "/assets/images/pizza.png",
			description:
				"Brought prouctivity to pizza inn kenya using the MERN tech stack.",
			link: {
				github: "https://github.com/douglaswangome/pizza",
				site: "https://pizza-inn-kenya.netlify.app/",
			},
			tags: [
				"react",
				"redux",
				"javascript",
				"nodedotjs",
				"express",
				"mongodb",
				"firebase",
			],
		},
		{
			title: "react cookies",
			img: "/assets/images/cookies.png",
			description:
				"Developed a cookie store using React for storing and managing cookies.",
			link: {
				github: "https://github.com/douglaswangome/react_with_cookies",
				site: "https://react-with-cookies.netlify.app/",
			},
			tags: ["react", "javascript", "css3"],
		},
	];

	return (
		<div className="home">
			<Card id="about" className="two" legend="Delve Deeper">
				<div className="me">
					<div className="image">
						<img src="/assets/images/me.png" alt="me" />
					</div>
					<div className="socials">
						<List
							items={[
								{
									icon: <FaGithubAlt />,
									link: "https://www.github.com/douglaswangome",
								},
								{
									icon: <BsTwitterX />,
									link: "https://www.twitter.com/ishdagnesh",
								},
								{
									icon: <BsLinkedin />,
									link: "https://www.linkedin.com/in/douglas-wangome",
								},
							]}
						/>
					</div>
				</div>
				<div className="info">
					<span>
						Hi, I'm <strong>Douglas Wangome</strong>, a fullstack developer
						based in Kenya.
					</span>
					<span>
						Embarking on a journey into the digital realm in 2018, I stumbled
						upon the world of web development - a discovery that forever altered
						my trajectory. From the moment I immersed myself into the ocean of
						JavaScript, I was hooked. As a student at Machakos University,
						pursuing a Bachelor's degree in Computer Science, I've adopted every
						opportunity to delve deeper into the artistry of coding. My
						curiosity propels me into the realm of full stack development, where
						I effortlessly navigate the intricacies of both frontend and backend
						technologies. With each project, I create digital landscapes that
						inspire awe. In my pursuit for expertise, I explored TypeScript,
						discovering its potential to create robust systems. Continuing to
						adapt to the evolving tech landscape, I maintain my passion for
						crafting innovative solutions. From being a curious student to a
						capable full stack developer, I'm prepared to make a meaningful
						impact in the digital world.
					</span>
				</div>
			</Card>
			<Card id="skills" className="three" legend="competency collection">
				<div className="section">
					<div className="title">Languages</div>
					<List
						items={[
							{ image: "/assets/icons/javascript.svg", text: "JavaScript" },
							{ image: "/assets/icons/typescript.svg", text: "TypeScript" },
							{ image: "/assets/icons/python.svg", text: "Python" },
							{ image: "/assets/icons/html5.svg", text: "HTML5" },
							{ image: "/assets/icons/css3.svg", text: "CSS3" },
							{ image: "/assets/icons/sass.svg", text: "Sass" },
						]}
					/>
				</div>
				<div className="section">
					<div className="title">Frameworks</div>
					<List
						items={[
							{ image: "/assets/icons/vite.svg", text: "Vite" },
							{ image: "/assets/icons/react.svg", text: "React" },
							{ image: "/assets/icons/redux.svg", text: "Redux" },
							{ image: "/assets/icons/nodedotjs.svg", text: "Node.js" },
							{ image: "/assets/icons/express.svg", text: "Express.js" },
							{ image: "/assets/icons/tailwindcss.svg", text: "Tailwind CSS" },
						]}
					/>
				</div>
				<div className="section">
					<div className="title">Databases</div>
					<List
						items={[
							{ image: "/assets/icons/mongodb.svg", text: "MongoDB" },
							{ image: "/assets/icons/firebase.svg", text: "Firebase" },
							{ image: "/assets/icons/mysql.svg", text: "MySQL" },
							{ image: "/assets/icons/postgresql.svg", text: "PostgreSQL" },
						]}
					/>
				</div>
			</Card>
			<Card id="projects" className="three" legend="creative collection">
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</Card>
			<Card id="contact" className="two" legend="need help?">
				<div className="section">
					<span>
						Ready to Turn Ideas into Action? Let's Partner Up and Get Things
						Rolling! Contact Me Today!
					</span>
				</div>
				<div className="section">
					<div className="icon">
						<a href="tel:+254798782288">
							<BsPhone />
						</a>
					</div>
					<div className="icon">
						<a href="mailto:ishdagnesh@gmail.com">
							<BsEnvelope />
						</a>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Home;
