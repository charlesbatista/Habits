import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import { z } from "zod";
import dayjs from "dayjs";

export async function appRoutes(app: FastifyInstance) {
  /**
   * Primeira rota para criação de um novo hábito
   */
  app.post("/habits", async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6)),
    });

    const { title, weekDays } = createHabitBody.parse(request.body);

    // startOf('day') basicamente puxa o dia de hoje
    // zerando as horas, minutos e segundos: 2023-01-10 00:00:00
    const today = dayjs().startOf("day").toDate();

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map((weekDay) => {
            return {
              week_day: weekDay,
            };
          }),
        },
      },
    });
  });

  /**
   * Listar em formato de json todos os hábitos criados
   */
  app.get("/habits/list/json", async () => {
    const habits = prisma.habit.findMany();
    return habits;
  });

  /**
   * Listar todos os hábitos dado um dia
   */
  app.get("/day", async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date(),
    });

    const { date } = getDayParams.parse(request.query);
    const parsedDate = dayjs(date).startOf('day')
    const weekDay = parsedDate.get("day");

    console.log(date, weekDay)

    // todos os hábitos possíveis
    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        weekDays: {
          some: {
            week_day: weekDay,
          },
        },
      },
    });

    // traz os dados do dia selecionado
    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate()
      },
      include: {
        dayHabits: true
      }
    })

    // todos os hábitos completados
    const completedHabits = day?.dayHabits.map((dayHabit) => {
      return dayHabit.habit_id
    })

    return {
      possibleHabits,
      completedHabits
    };
  });

  /**
   * Toggle habit checking
   */
  
}
