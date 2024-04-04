import { FC, useState } from "react";
import { motion } from "framer-motion";
// Icons
import { BsList } from "react-icons/bs";

const Header: FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const toggleMenu = (): void => {
		setShowMenu(!showMenu);
	};

	const links: { name: string; link: string }[] = [
		{ name: "About", link: "#about" },
		{ name: "Skills", link: "#skills" },
		{ name: "Projects", link: "#projects" },
		{ name: "Contact", link: "#contact" },
	];

	return (
		<div className={`header ${showMenu ? "show" : ""}`}>
			<div className="title">doug</div>
			<div className="links">
				{links.map((link, index) => (
					<motion.a
						className="link"
						key={index}
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						href={link.link}
						onClick={() => setShowMenu(false)}
					>
						{link.name}
					</motion.a>
				))}
			</div>
			<motion.div
				className="menu"
				onClick={toggleMenu}
				animate={showMenu ? { rotate: 90 } : { rotate: 0 }}
			>
				<BsList />
			</motion.div>
		</div>
	);
};

export default Header;
