import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import { HomeScreen } from "./screens/HomeScreen";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fragment } from "react";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				<StatusBar style="auto" />

				<Tab.Navigator
					initialRouteName="home"
					screenOptions={{
						tabBarStyle: {
							height: 70,
						},
					}}
				>
					<Tab.Screen
						name="home"
						component={HomeScreen}
						options={{
							headerShown: false,
							tabBarLabel: ({ focused }) => (
								<TabLabel focused={focused}>Home</TabLabel>
							),
							tabBarLabelStyle: { fontSize: 20, color: "gray" },
							tabBarIcon: ({ focused }) => (
								<Entypo
									name="home"
									size={focused ? 30 : 24}
									color={focused ? "black" : "gray"}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="boxes"
						component={HomeScreen}
						options={{
							headerShown: false,
							tabBarLabel: ({ focused }) => (
								<TabLabel focused={focused}>Boxes</TabLabel>
							),
							tabBarLabelStyle: { fontSize: 20, color: "gray" },
							tabBarIcon: ({ focused }) => (
								<Feather
									name="box"
									size={focused ? 30 : 24}
									color={focused ? "black" : "gray"}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="books"
						component={View}
						options={{
							headerShown: false,
							tabBarLabel: ({ focused }) => (
								<TabLabel focused={focused}>Books</TabLabel>
							),
							tabBarLabelStyle: { fontSize: 20, color: "gray" },
							tabBarIcon: ({ focused }) => (
								<FontAwesome
									name="rupee"
									size={focused ? 30 : 24}
									color={focused ? "black" : "gray"}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="more"
						component={View}
						options={{
							headerShown: false,
							tabBarLabel: ({ focused }) => (
								<TabLabel focused={focused}>More</TabLabel>
							),
							tabBarLabelStyle: { fontSize: 20, color: "gray" },
							tabBarIcon: ({ focused }) => (
								<Feather
									name="more-horizontal"
									size={focused ? 30 : 24}
									color={focused ? "black" : "gray"}
								/>
							),
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}

const TabLabel = styled.Text<{ focused: boolean }>`
  
  color: ${(props) => (props.focused ? "black" : "gray")};
  font-size: ${(props) => (props.focused ? "18px" : "14px")};
  
`;
