import {
	trackPageView,
	trackClickEvent,
} from "../../services/AnalyticsService";
import useGenerateUserUUID from "../../hooks/useGenerateUserUUID";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Article = () => {
	const blogData = useSelector((state: RootState) => state.abTests.data);
	const variationId = useSelector(
		(state: RootState) => state.abTests.currentVariation
	);
	const currentBlogs = blogData.filter(
		(data) => data.variation === variationId
	);
	const userUUID = useGenerateUserUUID();
	trackPageView("/home", userUUID, variationId);

	const handleSignUpClick = () => {
		trackClickEvent("signUpButton", variationId, userUUID);
	};

	return (
		<div className="m-5 flex gap-5">
			{currentBlogs.length > 0 ? (
				currentBlogs.map((blog, index) => (
					<div key={index}>
						<h2 className="uppercase mb-2">{blog.blogTitle}</h2>
						<img src={blog.imgSrc} alt="" />
						<p>{blog.content}</p>
						<button
							className="bg-gray-200 px-2 py-1 rounded-md mt-3"
							onClick={handleSignUpClick}
						>
							{blog.ctaBtnText}
						</button>
					</div>
				))
			) : (
				<p className="text-red-800">No tests found for this variation.</p>
			)}
		</div>
	);
};

export default Article;
