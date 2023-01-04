import SearchInput from "./components/SearchInput";
import SearchHeader from "./components/SearchHeader";

import "./index.css";

const SearchSection = () => {
  return (
    <div className="search-section-wrp">
      <SearchHeader />
      <SearchInput />
    </div>
  );
};

export default SearchSection;
