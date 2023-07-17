import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const UserCard = ({ username }: { username: string }) => {
	return (
		<UserCardWrapper>
			<FontAwesome name="user-circle-o" size={36} color={"#4f617d"} />
			<UserNameText>{username}</UserNameText>
		</UserCardWrapper>
	);
};

const UserCardWrapper = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  gap: 16px;
`;

const UserNameText = styled.Text`
  color: #4f617d;
  font-size: 24px;
  font-weight: 700;
`;
