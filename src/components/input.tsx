import React, { FormEvent } from "react";

export type InputProps = {
	name: string;
	value: string;
	onChange: (value: string) => void;
};

export default ({ value, onChange = () => {} }: InputProps) => {
	const handleChange = (event: FormEvent<HTMLInputElement>) => {
		onChange(event.currentTarget.value);
	};
	return (
		<input
			value={value}
			name="search-terms"
			type="text"
			onChange={handleChange}
		/>
	);
};
