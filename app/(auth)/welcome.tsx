import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react"; // 컴포넌트의 렌더링 사이에 값을 유지할 수 있도록 도와줍니다.
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity // 터치가능한 버튼 생성
        onPress={() => {
          // skip 누르면 sign-up page로 간다
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef} // Swiper 컴포넌트의 참조를 설정하여 나중에 메서드를 호출할 수 있도록 함.
        loop={false} // 슬라이드가 끝나면 처음으로 돌아가지 않음.
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" /> // 비활성화된 점 표시: 회색 점.
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" /> // 활성화된 점 표시: 파란색 점.
        }
        onIndexChanged={(index) => setActiveIndex(index)} // 슬라이드 인덱스가 변경될 때 호출되는 함수.
      >
        {/* constants 폴더에 index.ts 에서 글씨씀. types 폴더에서 이미지 꾸몄음. */}
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      {/* Button */}
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"} // isLastSlide가 true일 경우 "Get Started"를, 그렇지 않을 경우 "Next"를 표시합니다.
        // 버튼이 눌렸을 때 실행될 함수입니다.
        onPress={() =>
          // isLastSlide가 true일 경우, 사용자를 회원가입 페이지로 이동시킵니다.
          // 그렇지 않을 경우, swiperRef를 사용하여 다음 슬라이드 "scrollBy(1)" 로 이동합니다.
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        // 버튼의 스타일을 설정합니다.
        className="w-11/12 mt-10 mb-5"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
