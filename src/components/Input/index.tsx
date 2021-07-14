import React, { useRef, useEffect, useCallback } from "react";
import { TextInput, TextInputProps, Text } from "react-native";
import { useField } from "@unform/core";
import { View } from "react-native";

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
}
interface InputReference extends TextInput {
  value: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  onChangeText,
  ...rest
}) => {
  const inputValueRef = useRef<InputReference>(null);
  const { fieldName, registerField, defaultValue = "", error } = useField(name);

  useEffect(() => {
    if (inputValueRef.current) inputValueRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      getValue() {
        return inputValueRef.current.value;
      },
      setValue(refField: any, valueField: string) {
        inputValueRef.current.value = valueField;
      },
      clearValue() {
        inputValueRef.current.value = "";
      },
    });
  }, [fieldName, registerField]);
  const handleChangeText = useCallback(
    (value: string) => {
      if (inputValueRef.current) inputValueRef.current.value = value;
      if (onChangeText) onChangeText(value);
    },
    [onChangeText]
  );
  return (
    <>
      {label && <Text>{label}</Text>}
      <TextInput
        ref={inputValueRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        {...rest}
        style={{
          borderRadius: 5,
          marginTop: 15,
          borderWidth: 1,
          paddingVertical: 8,
          fontSize: 18,
          paddingHorizontal: 5,
          marginHorizontal: 15,
          borderColor: error ? "red" : "#8c52ff",
        }}
      />
      {error && (
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ color: "red" }}>{error}</Text>
        </View>
      )}
    </>
  );
};

export default Input;
