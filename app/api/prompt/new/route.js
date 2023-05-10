import { connectionToDB } from "@utils/database";

export const POST = async (req) => {
  const { userId, promp, tag } = await req.json();

  try {
    await connectionToDB();
  } catch (error) {}
};
