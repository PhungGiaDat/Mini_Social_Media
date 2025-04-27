// Stack cho Chat
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageListScreen from '../screens/Messages/ChatListScreen'; // Sửa đường dẫn
import ChatScreen from '../screens/Messages/ChatRoomScreen'; // Sửa đường dẫn

const Stack = createNativeStackNavigator();

export default function MessageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MessageList" component={MessageListScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
