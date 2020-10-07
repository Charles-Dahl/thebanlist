import React from "react";

import Input, { InputProps } from "./input";
import Error from "./error";

interface FieldProps extends InputProps {
	label: string;
	error?: string;
}

export default ({ name, label, error, ...rest }: FieldProps) => {
	return (
		<label htmlFor={name}>
			{label}
			<Input name={name} {...rest} />
			{error && <Error>{error}</Error>}
		</label>
	);
};
