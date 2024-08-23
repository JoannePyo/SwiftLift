import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { InputFieldProps } from "@/types/type";

const InputField = ({
  label, // 입력 필드의 레이블 텍스트
  icon, // 입력 필드 왼쪽에 표시할 아이콘
  secureTextEntry = false, // 비밀번호 입력 여부 (기본값: false)
  labelStyle, // 레이블 스타일
  containerStyle, // 컨테이너 스타일
  inputStyle, // 입력 필드 스타일
  iconStyle, // 아이콘 스타일
  className, // 추가 클래스 이름 (사용되지 않음)
  ...props // 나머지 props를 가져옴
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // iOS에서는 padding, Android에서는 height로 키보드 회피
    >
      {/* 화면을 터치하면 키보드를 숨김 */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500  ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry} // 비밀번호 입력 여부 설정
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
