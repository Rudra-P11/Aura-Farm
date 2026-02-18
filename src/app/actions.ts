"use server";
import fs from 'fs/promises';
import path from 'path';

export async function submitRecruiterEmail(formData: FormData) {
  const email = formData.get("email");
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!email || typeof email !== "string") {
    return { success: false, message: "Invalid email protocol." };
  }

  // 1. Log to the Terminal (Check your VS Code Output)
  console.log("------------------------------------------------");
  console.log("🚀 NEW RECRUITER CONTACT:", email);
  console.log("------------------------------------------------");

  // 2. Save to a file named 'recruiters.log' in your project root
  try {
    const logPath = path.join(process.cwd(), 'recruiters.log');
    const logEntry = `[${new Date().toISOString()}] EMAIL: ${email}\n`;
    await fs.appendFile(logPath, logEntry);
  } catch (error) {
    console.error("Failed to save to log file:", error);
  }

  return { success: true, message: "Connection established." };
}