import { combineReducers } from "redux";
import LoadingReducers from "./LoadingReducers";
import NoticeReducers from "./NoticeReducers";
import DetailPageReducers from "./DetailPage";
import MenuReducers from "./OpenMenu";
import MenuSelectReducers from "./MenuStatus";

const AllReducers = combineReducers({
  isLoading: LoadingReducers,
  isNotice: NoticeReducers,
  isDetailPage: DetailPageReducers,
  isMenuOpen: MenuReducers,
  isMenuSelect: MenuSelectReducers,
});

export default AllReducers;
