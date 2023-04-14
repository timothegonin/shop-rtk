import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StockInfos from "../../../components/StockInfos";
import {
	addPhones as addPhonesAction,
	addTablets as addTabletsAction,
} from "../phones/phoneSlice";

const container = {
	width: "300px",
	padding: "20px",
	border: "1px solid grey",
	margin: "10px auto",
};

const btnContainer = {
	display: "flex",
	marginBottom: "12px",
};

const AdminView = () => {
	const { phone, television } = useSelector((state) => state);
	const dispatch = useDispatch();

	const [phoneNum, setPhoneNum] = useState(1);
	const [tabletNum, setTabletNum] = useState(1);

	return (
		<div style={container}>
			<h2>Admin</h2>
			<StockInfos product="Téléphones" stock={phone.phones} />
			<div style={btnContainer}>
				<input
					type="number"
					min="1"
					value={phoneNum}
					onChange={(e) => setPhoneNum(e.target.value)}
				/>
				<button
					onClick={() => dispatch(addPhonesAction(parseInt(phoneNum, 10)))}
					// addition operator below
					// onClick={() => dispatch(addPhonesAction(+phoneNum))}
				>
					Augmenter Stock
				</button>
			</div>
			<StockInfos product="Tablettes" stock={phone.tablets} />
			<div style={btnContainer}>
				<input
					type="number"
					min="1"
					value={tabletNum}
					onChange={(e) => setTabletNum(e.target.value)}
				/>
				<button
					onClick={(e) => dispatch(addTabletsAction(parseInt(tabletNum, 10)))}
				>
					Augmenter Stock
				</button>
			</div>
			<StockInfos product="Télévisions" stock={television.tvs} />
			<div style={btnContainer}>
				<input type="number" min="1" value="" />
				<button>Augmenter Stock</button>
			</div>
		</div>
	);
};

export default AdminView;
