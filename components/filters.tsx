import styled from "styled-components/native";

export const Filters = () => {
	return (
		<StyledFiltersView>
			<FilterChip label="Both" active />
			<FilterChip label="Gold" />
			<FilterChip label="Silver" />
		</StyledFiltersView>
	);
};

const FilterChip = ({ active, label }: { active?: boolean; label: string }) => {
	return (
		<StyledFilterChip active={active}>
			<StyledFilterChipText active={active}>{label}</StyledFilterChipText>
		</StyledFilterChip>
	);
};

// -----------STYLED COMPONENTS------------

const StyledFiltersView = styled.View`
flex-direction: row;
gap: 12px;
`;

const StyledFilterChip = styled.View<{ active?: boolean }>`

background-color: ${(prop) => (prop.active ? "#7F90AB" : "transparent")};
border : 1px solid #7F90AB;
border-radius: 20px;

`;

const StyledFilterChipText = styled.Text<{ active?: boolean }>`
  padding:4px 12px;
font-size: 14px;
font-weight: 400;
color: ${(prop) => (prop.active ? "white" : "#7F90AB")};

`;
