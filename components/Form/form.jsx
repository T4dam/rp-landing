import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Image from 'next/image';
import mail from '../../public/images/mail.svg';

const validationSchema = yup.object({
	email: yup
		.string()
		.email('Only valid email addresses are allowed')
		.required('Email is required'),
});

const Form = () => {
	const [copyText, setCopyText] = useState('https://ratepunk.com/referral');
	const [show, setShow] = useState(true);

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
					<div className="form__success__container">
						<div className="form__success__icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="#8CD943"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div className="form__success__message">
							Your email is confirmed!
						</div>
					</div>
					<input
						className="form__input--referral"
						value={copyText}
						// onChange={(e) => setCopyText(e.target.value)}
					/>
					<button onClick={handleCopy} className="form__button">
						Copy URL
					</button>
				</div>
			)}
			{!show && (
				<form onSubmit={handleSubmit} className="form__container">
					{errors.email && touched.email && (
						<p className="from__errors">{errors.email}</p>
					)}

					<input
						className="form__input"
						id="icon_mail"
						name="email"
						type="text"
						placeholder="Enter your email address"
						autoComplete="email"
						value={values.email}
						onBlur={handleBlur}
						error={touched.email && Boolean(errors.email).toString()}
						onChange={handleChange}
						isvalid={Boolean(dirty && isValid).toString()}
					/>
					<div>
						<button type="submit" className="form__button">
							Get Referral Link
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default Form;
