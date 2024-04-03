import { ChangeEvent, FC } from "react";

interface FieldProps {
	name: string;
	value: string;
	onChange: (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => void;
}

const Field: FC<FieldProps> = ({ name, value, onChange }) => {
	return (
		<div className="field">
			<label htmlFor={name}>{name}</label>
			{name === "message" ? (
				<textarea value={value} onChange={onChange} id={name} name={name} />
			) : (
				<input
					value={value}
					onChange={onChange}
					id={name}
					name={name}
					type="text"
				/>
			)}
		</div>
	);
};

export default Field;
