import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://madoththarun22:asdfghjkl@cluster0.pl3th.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
