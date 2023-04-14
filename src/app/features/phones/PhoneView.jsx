import { useState } from "react";
import phone from "../../../images/phone.png";
import tablet from "../../../images/tablet.png";
import { useDispatch, useSelector } from "react-redux";
import { phones as phonesAction, tablets as tabletsAction } from "./phoneSlice";

function PhoneView() {
	const { phones, tablets } = useSelector((state) => state.phone);
	const dispatch = useDispatch();

	const [tabletNum, setTabletNum] = useState(1);
	const [phoneNum, setPhoneNum] = useState(1);

	return (
		<>
			<div className="container">
				<img src={phone} alt="phone" />
				<p>
					Disponibilité: <span className="count">{phones}</span>
				</p>
				<div className="btnContainer">
					<button onClick={() => dispatch(phonesAction(phoneNum))}>
						Acheter
					</button>
					<input
						type="number"
						min="1"
						max={phones}
						value={phoneNum}
						onChange={(e) => setPhoneNum(e.target.value)}
					/>
				</div>
			</div>
			<div className="container">
				<img src={tablet} alt="tablet" />
				<p>
					Disponibilité: <span className="count">{tablets}</span>
				</p>
				<div className="btnContainer">
					<button onClick={() => dispatch(tabletsAction(tabletNum))}>
						Acheter
					</button>
					<input
						type="number"
						min="1"
						max={tablets}
						value={tabletNum}
						onChange={(e) => setTabletNum(e.target.value)}
					/>
				</div>
			</div>
		</>
	);
}

export default PhoneView;
