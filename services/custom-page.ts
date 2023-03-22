import { loadMDXData } from "@/utils/markdown";
import fs from "fs";
export const loadCustomPage = async (filepath: string) => {
  const raw_data = fs.readFileSync(filepath,"utf-8");
  return await loadMDXData(raw_data);
};
