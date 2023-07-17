import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { FloatingAction } from "react-native-floating-action";
import { Text, View } from "react-native";

export const FAB = () => {
	const handleFABClick = () => {
		setFabState((prev) => !prev);
		console.log("CLICLED");
	};

	const [fabState, setFabState] = useState(false);
	return (
		<FloatingAction
			onClose={() => setFabState(false)}
			onOpen={() => setFabState(true)}
			buttonSize={46}
			floatingIcon={
				fabState ? (
					<Octicons name="dash" size={36} color="white" />
				) : (
					<MaterialIcons name="add" size={36} color="white" />
				)
			}
			color="#4F617D"
			onPressMain={handleFABClick}
			actions={[{ name: "main", render: () => <FABDialog /> }]}
		/>
	);
};

const FABDialog = () => {
	return (
		<StyledFABDialog>
			<FabDialogOption
				Icon={<MaterialIcons name="person-add" size={24} color="#4F617D" />}
				label="Add Party"
			/>
			<FabDialogOption
				Icon={<MaterialIcons name="compare-arrows" size={24} color="#4F617D" />}
				label="Transaction"
			/>
			<FabDialogOption
				Icon={<MaterialIcons name="person-add" size={24} color="#4F617D" />}
				label="Add Party"
			/>
		</StyledFABDialog>
	);
};

const FabDialogOption = ({
	Icon,
	label,
}: { Icon: JSX.Element; label: string }) => {
	return (
		<StyledFabDialogOption>
			<View
				style={{
					backgroundColor: "#F4F7FF",
					padding: 6,
					borderRadius: 50,
				}}
			>
				{Icon}
			</View>
			<Text style={{ fontSize: 12, color: "#5A5A5A" }}>{label}</Text>
		</StyledFabDialogOption>
	);
};

const StyledFabDialogOption = styled.View`
align-items: center;
gap: 12,

`;

const StyledFABDialog = styled.View`
	width: 385px;
	height: 302px;
	padding: 24px 40px;
	background-color: white;
	border-radius: 10px;
	flex-direction: row;
	gap: 12px;
`;

// <FABWrapper>
// 			<FABButtonWrapper
// 				onPress={() => setFabState((x) => !x)}
// 				activeOpacity={0.9}
// 			>
// 				<FABText>
// 					{!fabState && <MaterialIcons name="add" size={36} color="white" />}
// 					{fabState && <Octicons name="dash" size={36} color="white" />}
// 				</FABText>
// 			</FABButtonWrapper>
// 		</FABWrapper>

// const FABWrapper = styled.View`
//   position: absolute;
//   bottom: 20px;
//   right : 20px;
// `;

// const FABButtonWrapper = styled.TouchableOpacity`
//   width: 46px;
//   height: 46px;
//   border-radius: 50px;
//   background-color: #4F617D;
//   align-items: center;
//   justify-content: center;
// `;

// const FABText = styled.Text`

// `;
