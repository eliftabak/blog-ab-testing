import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../redux/store";
import { setUserUUID } from "../../redux/Slices/UserSlice";

const useGenerateUserUUID = () => {
	const dispatch = useDispatch();
	const userUUID = useSelector((state: RootState) => state.user.uuid);

	useEffect(() => {
		if (!userUUID) {
			const newUUID = uuidv4();
			dispatch(setUserUUID(newUUID));
		}
	}, [dispatch, userUUID]);

	return userUUID;
};

export default useGenerateUserUUID;
