import React, { FormEvent } from "react";

export type InputProps = {
	name?: string;
	value?: string;
	onChange?: (value: string) => void;
	type?: string;
};

export default ({ onChange = () => {}, ...rest }: InputProps) => {
	const handleChange = (event: FormEvent<HTMLInputElement>) => {
		onChange(event.currentTarget.value);
	};
	return <input onChange={handleChange} {...rest} />;
};
