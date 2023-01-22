import { View, Text, ScrollView } from "react-native";
import { HabitDay, DaySize } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateYearDates } from "../utils/generate-year-dates";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const datesFromYeartStart = generateYearDates();
const minimumSummaryDatesSize = 18 * 5; // 18 semanas
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYeartStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((d, i) => (
          <Text
            key={`${d}-${i}`}
            className="text-zinc-400 font-bold text-xl text-center mx-1"
            style={{ width: DaySize }}
          >
            {d}
          </Text>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100}}>
        <View className="flex-row flex-wrap">
          {datesFromYeartStart.map((d) => {
            return <HabitDay key={d.toISOString()} />;
          })}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, i) => {
              return (
                <View
                  key={i}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{
                    width: DaySize,
                    height: DaySize,
                  }}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
