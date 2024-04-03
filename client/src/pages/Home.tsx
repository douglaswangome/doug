import { ChangeEvent, FC, useState } from "react";
// Components
import Card from "components/Card";
import List from "components/List";
import Field from "components/Field";
// Icons
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Home: FC = () => {
	// Contact Form Details
	const [fields, setFields] = useState<{
		name: string;
		email: string;
		message: string;
	}>({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	): void => {
		const { name, value } = e.target;
		setFields((prev) => ({ ...prev, [name]: value }));
	};

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
									icon: <BsGithub />,
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
			{/* <Card id="projects" className="three" legend="creative collection">

			</Card> */}
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
			<Card id="contact" className="two" legend="need help?">
				<div className="section">
					<span>
						Ready to Turn Ideas into Action? Let's Partner Up and Get Things
						Rolling! Contact Me Today!
					</span>
					<img src="/assets/icons/mailbox.svg" alt="mailbox" />
				</div>
				<div className="section form">
					<Field name="name" value={fields.name} onChange={handleChange} />
					<Field name="email" value={fields.email} onChange={handleChange} />
					<Field
						name="message"
						value={fields.message}
						onChange={handleChange}
					/>
					<button onClick={() => console.log(fields)}>
						<span>Send Message</span>
					</button>
				</div>
			</Card>
		</div>
	);
};

export default Home;
