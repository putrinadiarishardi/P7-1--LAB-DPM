import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarInactiveTintColor: '#757575',
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: () => (
                    <LinearGradient
                        colors={['#3A3D40', '#282828']}
                        style={styles.tabBarBackground}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    />
                ),
                tabBarStyle: Platform.select({
                    ios: {
                        position: 'absolute',
                        backgroundColor: 'transparent',
                        borderRadius: 20,
                        marginBottom: 16,
                        marginHorizontal: 8,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                        elevation: 10,
                    },
                    default: {
                        backgroundColor: '#424242',
                        borderRadius: 20,
                    },
                }),
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    let iconColor = focused ? color : '#B0BEC5';

                    switch (route.name) {
                        case 'index':
                            iconName = 'list.bullet.rectangle.fill';
                            break;
                        case 'profile':
                            iconName = 'person.crop.circle.fill';
                            break;
                        case 'explore':
                            iconName = 'globe.americas.fill';
                            break;
                        default:
                            iconName = 'circle';
                    }

                    const scale = new Animated.Value(focused ? 1.2 : 1);
                    Animated.spring(scale, { toValue: focused ? 1.3 : 1, useNativeDriver: true }).start();

                    return (
                        <Animated.View style={{ transform: [{ scale }] }}>
                            <IconSymbol size={28} name={iconName} color={iconColor} />
                        </Animated.View>
                    );
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                },
            })}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'To-Do List',
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'My Profile',
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Discover',
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBarBackground: {
        flex: 1,
        borderRadius: 20,
    },
});
