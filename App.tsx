import MapScreen from "@/screens/MapScreen";
import LocationPermissionService from "@/services/LocationPermissionService";
import { ThemeProvider } from "./src/theme/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MapScreen />
        <LocationPermissionService />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}