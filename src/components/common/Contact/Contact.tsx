// Styles
import "./contact.scss";

// UseState
import { useForm } from "react-hook-form";

//Interface
interface FormData {
	name: string;
	firstname: string;
	email: string;
	subject: string;
	message: string;
}

export default function Contact() {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		const name = data.name?.trim();
		const firstname = data.firstname?.trim();
		const email = data.email?.trim();
		const subject = data.subject?.trim();
		const message = data.message?.trim();
		console.log(name, firstname, email, subject, message);
		reset();
	};

	return (
		<div className="contact">
			<div className="content">
				<h2 className="h2">Contact</h2>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="allName">
						<div>
							<input
								type="text"
								id="name"
								placeholder="Nom"
								className="input-primary"
								{...register("name", {
									required: {
										value: true,
										message: "Veuillez remplir ce champ",
									},
									minLength: {
										value: 3,
										message:
											"Le nom doit contenir au moins 3 caractères",
									},
									maxLength: {
										value: 20,
										message:
											"Le nom ne doit pas contenir plus de 20 caractères",
									},
								})}
							/>

							{errors.name && (
								<p className="error text">
									{errors.name.message}
								</p>
							)}
						</div>

						<div>
							<input
								type="text"
								id="firstname"
								placeholder="Prénom"
								className="input-primary"
								{...register("firstname", {
									required: {
										value: true,
										message: "Veuillez remplir ce champ",
									},
									minLength: {
										value: 3,
										message:
											"Le prénom doit contenir au moins 3 caractères",
									},
									maxLength: {
										value: 20,
										message:
											"Le prénom ne doit pas contenir plus de 20 caractères",
									},
								})}
							/>
							{errors.firstname && (
								<p className="error text">
									{errors.firstname.message}
								</p>
							)}
						</div>
					</div>
					<div>
						<input
							type="email"
							id="email"
							placeholder="Email"
							className="input-primary"
							{...register("email", {
								required: {
									value: true,
									message: "Veuillez remplir ce champ",
								},
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message:
										"Veuillez entrer une adresse email valide",
								},
							})}
						/>
						{errors.email && (
							<p className="error text">{errors.email.message}</p>
						)}
					</div>
					<div>
						<input
							type="text"
							id="subject"
							placeholder="Sujet"
							className="input-primary"
							{...register("subject", {
								required: {
									value: true,
									message: "Veuillez remplir ce champ",
								},
								minLength: {
									value: 3,
									message:
										"Le sujet doit contenir au moins 3 caractères",
								},
								maxLength: {
									value: 20,
									message:
										"Le sujet ne doit pas contenir plus de 20 caractères",
								},
							})}
						/>
						{errors.subject && (
							<p className="error text">
								{errors.subject.message}
							</p>
						)}
					</div>
					<div>
						<textarea
							id="message"
							placeholder="Message"
							{...register("message", {
								required: {
									value: true,
									message: "Veuillez remplir ce champ",
								},
								minLength: {
									value: 10,
									message:
										"Le message doit contenir au moins 10 caractères",
								},
								maxLength: {
									value: 200,
									message:
										"Le message ne doit pas contenir plus de 200 caractères",
								},
							})}
						></textarea>

						{errors.message && (
							<p className="error text">
								{errors.message.message}
							</p>
						)}
					</div>
					<button className="btn-primary" type="submit">
						Envoyer
					</button>
				</form>
			</div>
		</div>
	);
}
