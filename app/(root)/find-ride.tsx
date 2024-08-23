// This page for Ride page relate with RideLayout.tsx, _layout.tsx and confirm-ride.tsx from (root) folder
import { router } from "expo-router";
import { Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import GoogleTextInput from "@/components/GoogleTextInput";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { useLocationStore } from "@/store";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();

  return (
    <RideLayout title="Ride">
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">From</Text>
        {/* user Address location */}
        <GoogleTextInput
          icon={icons.target}
          initialLocation={userAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
          handlePress={(location) => setUserLocation(location)}
        />
      </View>

      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">To</Text>
        {/* destination address location */}
        <GoogleTextInput
          icon={icons.map}
          initialLocation={destinationAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="transparent"
          handlePress={(location) => setDestinationLocation(location)}
        />
      </View>
      {/* confirm-ride.tsx */}
      <CustomButton
        title="Find Now"
        onPress={() => router.push(`/(root)/confirm-ride`)}
        className="mt-5"
      />
    </RideLayout>
  );
};

export default FindRide;
