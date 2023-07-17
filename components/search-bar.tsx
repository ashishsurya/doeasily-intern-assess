import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const SearchBar = () => {
	return (
		<StyledSearchBarContainer>
			<MaterialIcons
				style={{ position: "absolute", top: 9, left: 9 }}
				name="search"
				size={24}
				color="gray"
			/>
			<StyledSearchInput placeholder="Search" />
		</StyledSearchBarContainer>
	);
};

const StyledSearchBarContainer = styled.View`
  border: 1px solid lightgray;
  position: relative;
  border-radius: 5px;
   
`;
const StyledSearchInput = styled.TextInput`
  padding: 12px;
  padding-left: 36px;
`;
