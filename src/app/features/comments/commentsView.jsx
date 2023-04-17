import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../comments/commentsSlice";

const CommentsView = () => {
	const commentSlice = useSelector((state) => state.comment);
	console.log(commentSlice);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchComments()); //une fonction de type: AsyncThunkAction
	}, [fetchComments]);

	return (
		<>
			<h2>Commentaires</h2>
			{commentSlice.isLoading ? (
				<p>Veuillez Patienter ...</p>
			) : commentSlice.error ? (
				<p style={{ color: "red", textAlign: "center" }}>
					{commentSlice.error}
				</p>
			) : (
				commentSlice.comments.map(({ body, email, id, name }) => {
					return (
						<div className="comments" key={id}>
							<p>Nom: {name}</p>
							<p>Email: {email}</p>
							<p>Avis: {body}</p>
						</div>
					);
				})
			)}
		</>
	);
};

export default CommentsView;
