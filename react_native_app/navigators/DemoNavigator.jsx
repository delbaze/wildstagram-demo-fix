import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

function Home() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("List");
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="Aller sur la liste" onPress={handlePress} />
    </View>
  );
}

function List() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Button title="revenir sur home" onPress={handlePress} />
      <Text>List</Text>
    </View>
  );
}
function DemoNavigator({ navigation }) {
  const { navigate } = navigation;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
}
export default DemoNavigator;
