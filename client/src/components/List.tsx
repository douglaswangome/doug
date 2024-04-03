import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ListProps {
	items:
		| { image: string; text: string }[]
		| { icon: ReactNode; link: string }[];
}

const List: FC<ListProps> = ({ items }) => {
	return (
		<ul className="list">
			{items.map((item, index) => {
				if ("image" in item) {
					return (
						<motion.li
							key={index}
							className="item"
							initial={{ opacity: 0, x: Math.random() > 0.5 ? -200 : 200 }}
							whileInView={{ opacity: 1, x: 0 }}
							whileHover={{ scale: 0.98 }}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
						>
							<img src={item.image} alt={item.text} />
							<span>{item.text}</span>
						</motion.li>
					);
				} else if ("icon" in item) {
					return (
						<motion.li
							key={index}
							className="item"
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<a href={item.link} target="_blank" rel="noreferrer">
								{item.icon}
							</a>
						</motion.li>
					);
				}
			})}
		</ul>
	);
};

export default List;
