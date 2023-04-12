import phone from "../../../images/phone.png";

function PhoneView() {
	return (
		<div className="container">
			<img src={phone} alt="phone" />
			<p>
				Disponibilité: <span className="count">9999</span>
			</p>
			<div className="btnContainer">
				<button onClick={() => {}}>Acheter</button>
			</div>
		</div>
	);
}

export default PhoneView;
