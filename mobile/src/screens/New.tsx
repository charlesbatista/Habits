import { useState } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { Feather } from "@expo/vector-icons"
import colors from "tailwindcss/colors";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDays(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      );
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex]);
    }
  }
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <BackButton />
        <Text className="text-white mt-6 font-extrabold text-3xl">
          Criar hábito
        </Text>
        <Text className="text-white mt-6 font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-700 focus:border-green-800" placeholder="ex.: Exercícios, dormir 8hrs por dia..." placeholderTextColor={colors.zinc[600]}/>

        <Text className="text-white mt-4 mb-3 font-semibold text-base">
          Qual a recorrência?
        </Text>

        {availableWeekDays.map((diaDaSemana, index) => {
          return (
            <Checkbox
              key={diaDaSemana}
              title={diaDaSemana}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDays(index)}
            />
          );
        })}

        <TouchableOpacity className="w-full h-14 flex-row items-center justify-center bg-green-600 mt-6 rounded-md" activeOpacity={0.7}>
          <Feather name="check" size={20} color={colors.white}/>
          <Text className="font-semibold text-base text-white ml-2">Confirmar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}