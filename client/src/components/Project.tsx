import { FC } from "react";
import { motion } from "framer-motion";
// Components
import List from "components/List";
// Types
import { Project as ProjectType } from "types/project";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const Project: FC<ProjectType> = ({ title, img, description, link, tags }) => {
	return (
		<motion.div
			className="project"
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			whileHover={{ scale: 0.98 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			<div className="image">
				<img src={img} alt={title} />
			</div>
			<div className="details">
				<div className="title">
					<span>{title}</span>
					<div className="tags">
						<List items={tags} />
					</div>
				</div>
				<div className="description">{description}</div>
				<div className="links">
					<a href={link.github} target="_blank" rel="noreferrer">
						<BsGithub />
					</a>
					<a href={link.site} target="_blank" rel="noreferrer">
						<BsLink45Deg />
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default Project;
