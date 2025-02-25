import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Nike from './Nike';
import Adidas from './Adidas';
import Mysuno from './Mysuno';
import Home from './Home';
import Puma from './Puma';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarIcon={{ activeTintColor: '#00fff' }}>
      <Tab.Screen
        name="Tênis Nike"
        component={Nike}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shoe-sneaker"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tênis Adidas"
        component={Adidas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shoe-cleat"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tênis Mysuno"
        component={Mysuno}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shoe-print"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tênis Puma"
        component={Puma}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shoe-formal"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
