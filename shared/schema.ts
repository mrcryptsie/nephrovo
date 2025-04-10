import { pgTable, text, serial, integer, real, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const predictions = pgTable("predictions", {
  id: serial("id").primaryKey(),
  createdAt: text("created_at").notNull(), // store as ISO date string
  creatinine: real("creatinine").notNull(),
  urea: real("urea").notNull(),
  age: integer("age").notNull(),
  sodium: real("sodium").notNull(),
  bpSystolic: real("bp_systolic").notNull(),
  shock: integer("shock").notNull(),
  sex: integer("sex").notNull(),
  anemia: integer("anemia").notNull(),
  glasgow: real("glasgow").notNull(),
  tobacco: integer("tobacco").notNull(),
  alcohol: integer("alcohol").notNull(),
  predictedStage: integer("predicted_stage").notNull(),
  confidence: real("confidence").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const predictionInputSchema = z.object({
  creatinine: z.number().positive(),
  urea: z.number().positive(),
  age: z.number().int().min(0).max(120),
  sodium: z.number().positive(),
  bpSystolic: z.number().positive(),
  shock: z.number().int().min(0).max(1),
  sex: z.number().int().min(0).max(1),
  anemia: z.number().int().min(0).max(1),
  glasgow: z.number().min(3).max(15),
  tobacco: z.number().int().min(0).max(1),
  alcohol: z.number().int().min(0).max(1),
});

export const insertPredictionSchema = createInsertSchema(predictions);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type PredictionInput = z.infer<typeof predictionInputSchema>;
export type InsertPrediction = z.infer<typeof insertPredictionSchema>;
export type Prediction = typeof predictions.$inferSelect;
