import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
	email: yup
		.string()
		.email('Įvestas turinys nėra el.paštas')
		.required('Norint prisijungti būtinai įveskite el.paštą'),
});

const Form = () => {
	const [copyText, setCopyText] = useState('referal');
	const [show, setShow] = useState(false);

	const handleCopy = () => {
		navigator.clipboard
			.writeText(copyText)
			.then(() => {
				alert('successfully copied');
			})
			.catch(() => {
				alert('something went wrong');
			});
	};
	function EmailHandler(emailAddress) {
		fetch('https://api.jsonbin.io/v3/b/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Master-Key':
					'$2b$10$2bywtKTQOUxbeNwEmPerLuf899tXwgZUu1hZc.zidq7dJvXE.EZMi',
			},
			body: JSON.stringify({
				email: emailAddress,
			}),
		})
			.then((response) => {
				if (response.ok) {
					setShow(true);
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
			});
	}
	const CheckEmail = () => {
		if (isValid && values.email != '') {
			EmailHandler(values.email);
		}
	};

	const {
		values,
		handleChange,
		errors,
		touched,
		handleBlur,
		handleSubmit,
		isValid,
		dirty,
		isSubmitting,
	} = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema,
		onSubmit: (values) => {
			CheckEmail(values.email);
		},
	});

	return (
		<div>
			{show && (
				<div>
					<div>emailas patvirtintas</div>
					<input
						value={copyText}
						// onChange={(e) => setCopyText(e.target.value)}
					/>
					<button onClick={handleCopy}>Copy</button>
				</div>
			)}
			{!show && (
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">Email Address</label>
					{errors.email && touched.email && (
						<p style={{ color: 'red' }}>{errors.email}</p>
					)}
					<input
						id="email"
						name="email"
						type="text"
						autoComplete="email"
						value={values.email}
						onBlur={handleBlur}
						error={touched.email && Boolean(errors.email).toString()}
						onChange={handleChange}
						isvalid={Boolean(dirty && isValid).toString()}
					/>
					<button type="submit">Submit</button>
				</form>
			)}
		</div>
	);
};

export default Form;
