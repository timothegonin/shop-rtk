import React from "react";

const span = {
	fontSize: "19px",
};
const alertStyle = {
	background: "crimson",
	color: "#fff",
	padding: "7px",
	borderRadius: "6px",
};

function StockInfos({ product, stock }) {
	const alert = stock < 2 && alertStyle;

	return (
		<p>
			<span style={{ ...span, ...alert }}>
				{product}: {stock}
			</span>
		</p>
	);
}

export default StockInfos;
