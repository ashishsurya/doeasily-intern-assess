import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { UserCard } from "../components/user-card";
import { StockCards } from "../components/stock-cards";
import { FAB } from "../components/floating-action-button";

export const HomeScreen = () => {
	return (
		<LinearGradient colors={["#ffffff", "#e4e6ff"]} style={{ flex: 1 }}>
			<HomeScreenWrapper>
				<UserCard username="Surya Ashish" />
				<StockCards />
				<FAB />
			</HomeScreenWrapper>
		</LinearGradient>
	);
};

const HomeScreenWrapper = styled.View`
flex: 1;
position: relative;
background-color: transparent;
`;
