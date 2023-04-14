import { useSelector } from "react-redux";
import StockInfos from "../../../components/StockInfos";

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

	return (
		<div style={container}>
			<h2>Admin</h2>
			<StockInfos product="Téléphones" stock={phone.phones} />
			<div style={btnContainer}>
				<input type="number" min="1" value="" />
				<button>Augmenter Stock</button>
			</div>
			<StockInfos product="Tablettes" stock={phone.tablets} />
			<div style={btnContainer}>
				<input type="number" min="1" value="" />
				<button>Augmenter Stock</button>
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
