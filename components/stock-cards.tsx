import styled from "styled-components/native";
import { SearchBar } from "./search-bar";
import { ScrollView, Text } from "react-native";
import { Filters } from "./filters";
import { StockCard, StockCardProps } from "./stock-card";
import { useEffect, useState } from "react";

export const StockCards = () => {
	const [stocks, setStocks] = useState<StockCardProps[]>([]);

	const API_URL = "https://mocki.io/v1/cf4c9d6c-6654-4177-80f4-ff3494115111";
	const exampleStockCard = {
		title: "total",
		silver: -14500.0,
		gold: +133.5,
		amount: +676000,
	} satisfies StockCardProps;

	useEffect(() => {
		(async () => {
			const response = await fetch(API_URL);
			const json = await response.json();
			setStocks(json as StockCardProps[]);
		})();
	}, []);

	return (
		<StyledStockCardsWrapper>
			<SearchBar />
			<Filters />
			<ScrollView>
				{stocks.map((stock) => (
					<StockCard key={stock.title} {...stock} />
				))}
			</ScrollView>
		</StyledStockCardsWrapper>
	);
};

const StyledStockCardsWrapper = styled.View`
  padding: 0 46px;
  flex: 1;
	gap: 18px;
`;
