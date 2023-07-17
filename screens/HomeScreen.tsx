import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { UserCard } from "../components/user-card";
import { StockCards } from "../components/stock-cards";

export const HomeScreen = () => {
	return (
		<LinearGradient colors={["#ffffff", "#e4e6ff"]} style={{ flex: 1 }}>
			<HomeScreenWrapper>
				<UserCard username="Surya Ashish" />
				<StockCards />
			</HomeScreenWrapper>
		</LinearGradient>
	);
};

const HomeScreenWrapper = styled.View`
flex: 1;
`;
