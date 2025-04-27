// Stack cho Home
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen'; // Sửa đường dẫn
import PostDetailScreen from '../screens/Home/PostDetailScreen'; // Sửa đường dẫn

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
    </Stack.Navigator>
  );
}
