import { combineReducers } from "redux";
import LoadingReducers from "./LoadingReducers";
import NoticeReducers from "./NoticeReducers";

const AllReducers = combineReducers({
  isLoading: LoadingReducers,
  isNotice: NoticeReducers,
});

export default AllReducers;
