import styled from "styled-components/native";
import { formatCurrency } from "react-native-format-currency";
import { Text, View } from "react-native";

export interface StockCardProps {
	title: string;
	silver: number;
	gold: number;
	amount: number;
}

export const StockCard: React.FC<StockCardProps> = (props) => {
	return (
		<StockCardContianer>
			<StyledStockCardTitle>{props.title}</StyledStockCardTitle>
			<StyledStockCardPricesRow>
				<StockBehaviourDisplay label="silver" behaviour={props.silver} />
				<StockBehaviourDisplay label="gold" behaviour={props.gold} />
				<StockBehaviourDisplay label="amount" behaviour={props.amount} />
			</StyledStockCardPricesRow>
		</StockCardContianer>
	);
};

const StockBehaviourDisplay = ({
	label,
	behaviour,
}: { label: string; behaviour: number }) => {
	return (
		<View style={{ gap: 2 }}>
			<StyledAssetTitle>{label}</StyledAssetTitle>
			{label === "amount" ? (
				<StyledStockBehaviourDisplay behaviour={behaviour}>
					{
						formatCurrency({
							amount: Number(behaviour.toFixed(2)),
							code: "INR",
						})[0]
					}
				</StyledStockBehaviourDisplay>
			) : (
				<StyledStockBehaviourDisplay behaviour={behaviour}>
					{behaviour.toFixed(3)} Gms
				</StyledStockBehaviourDisplay>
			)}
		</View>
	);
};

const StockCardContianer = styled.View`
padding: 10px 12px;
background-color: white;
border-radius: 10px;
gap: 10px;
margin-bottom: 18px;
`;
// -----

const StyledAssetTitle = styled.Text`
text-transform: capitalize;
font-size: 13px;
color: #484848;
`;

const StyledStockBehaviourDisplay = styled.Text<{ behaviour: number }>`
	color: ${(props) => (props.behaviour < 0 ? "red" : "green")};
`;

const StyledStockCardTitle = styled.Text`
	font-size: 16px;
	font-weight: 600;
	text-transform: capitalize;
`;

const StyledStockCardPricesRow = styled.View`
	
	flex-direction: row;
	gap: 12px;


`;
