import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setVariation } from "../../redux/Slices/ABTestSlice";

const useAssignABTestVariation = () => {
	const dispatch = useDispatch();
	const currentVariation = useSelector(
		(state: RootState) => state.abTests.currentVariation
	);
	const blogData = useSelector((state: RootState) => state.abTests.data);

	useEffect(() => {
		if (!currentVariation && blogData.length > 0) {
			const randomIndex = Math.floor(Math.random() * blogData.length);
			const variation = blogData[randomIndex].variation;

			dispatch(setVariation(variation));
		}
	}, [currentVariation, blogData, dispatch]);

	return currentVariation;
};

export default useAssignABTestVariation;
