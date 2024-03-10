import { useDispatch } from "react-redux";
import { addTestConfig } from "../../redux/Slices/ABTestSlice";
import { IABTestFormData } from "../../types";
import ABTestForm from "../../components/ABTestForm";

const ABTestManager = () => {
	const dispatch = useDispatch();

	const onSubmit = (data: IABTestFormData) => {
		dispatch(addTestConfig(data));
		alert("A/B Test saved successfully!");
	};

	return (
		<div className="m-5">
			<h2 className="mb-5">Add A/B Test Configuration</h2>
			<ABTestForm onSubmit={onSubmit} />
		</div>
	);
};

export default ABTestManager;
