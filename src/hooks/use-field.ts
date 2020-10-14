import { useEffect, useState } from "react";
import * as yup from "yup";

export default <T>(defaultValue: T, schema: yup.Schema<T>) => {
	const [value, onChange] = useState<T>(defaultValue);
	const [errors, setErrors] = useState<Array<string>>([]);
	const [touched, setTouched] = useState(false);

	const onBlur = () => setTouched(true);

	useEffect(() => {
		if (schema) {
			try {
				schema.validateSync(value, { abortEarly: false });
				setErrors([]);
			} catch (error) {
				setErrors([error.message]);
			}
		}
	}, [value]);

	return { value, onChange, errors, touched, onBlur };
};
