import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

type DataItem = { [key: string]: string };

function transformData(data: DataItem[]): DataItem[] {
  const [firstObject, headerObject, valuesObject] = data;

  const transformedObject: DataItem = {};

  Object.keys(headerObject).forEach((key) => {
    const newKey = headerObject[key];
    transformedObject[newKey] = valuesObject[key];
  });

  return [firstObject, transformedObject];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  
  try {
    const response = await axios.get("http://127.0.0.1:5000/extract_table");

    const transformedData = transformData(response.data);

    return res.status(response.status).json(transformedData);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        return res
          .status(axiosError.response.status)
          .json(axiosError.response.data);
      } else if (axiosError.request) {
        return res.status(503).json({ message: "No response from server" });
      }
    }

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
