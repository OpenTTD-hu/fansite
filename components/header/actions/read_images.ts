"use server";

import { readdir } from "node:fs/promises";

export default async function ReadImages(): Promise<string[] | undefined> {
  try {
    const files = await readdir("./public/dynamic_bg", { withFileTypes: true });
    const imagePaths = files
      .filter((file) => file.isFile())
      .map((file) => `/dynamic_bg/${file.name}`);
      return imagePaths;
  } catch (error) {
    console.log(error);
  }
}
