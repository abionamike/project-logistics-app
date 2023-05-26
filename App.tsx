import ButtonComponent from "@/components/button";
import MapScreen from "@/screens/MapScreen";
import LocationPermissionService from "@/services/LocationPermissionService";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <MapScreen />
      <LocationPermissionService />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
