import { FC, ReactNode } from "react";

interface CardProps {
	id: string;
	className?: string;
	legend: string;
	children: ReactNode;
}

const Card: FC<CardProps> = ({ id, className = "", legend, children }) => {
	return (
		<div className="card" id={id}>
			<div className="title">{legend}</div>
			<div className={`content ${className}`}>{children}</div>
		</div>
	);
};

export default Card;
