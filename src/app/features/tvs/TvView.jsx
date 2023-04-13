import { useState } from "react";
import tv from "../../../images/tv.png";
import { useDispatch, useSelector } from "react-redux";
import { tvs as tvsAction } from "./tvSlice";

function TvView() {
	const { tvs } = useSelector((state) => state.television);
	const dispatch = useDispatch();

	const [tvNum, setTvNum] = useState(1);

	return (
		<div className="container">
			<img src={tv} alt="tv" />
			<p>
				Disponibilité: <span className="count">{tvs}</span>
			</p>
			<div className="btnContainer">
				<button onClick={() => dispatch(tvsAction(tvNum))}>Acheter</button>
				<input
					type="number"
					value={tvNum}
					onChange={(e) => setTvNum(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default TvView;
