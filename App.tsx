import MapScreen from "@/screens/MapScreen";
import LocationPermissionService from "@/services/LocationPermissionService";
import { ThemeProvider } from "./src/theme/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserLocationStateContextProvider } from "./src/context/UserLocationStateContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <UserLocationStateContextProvider>
          <MapScreen />
          <LocationPermissionService />
        </UserLocationStateContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}