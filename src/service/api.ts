import axios, { AxiosResponse } from "axios";
import { ReadStatus, ScanResultsProps } from "../components/type";

const baseURL = import.meta.env.VITE_FUNCTIONS_URL;

export const checkStatus = async (): Promise<{
  initLength: number;
  idsLength: number;
}> => {
  const res = await axios.get(`${baseURL}/checkStatus`, {
    withCredentials: true,
  });
  return res.data;
};
export const getResult = async (): Promise<ScanResultsProps> => {
  const res = await axios.get(`${baseURL}/getResults`, {
    withCredentials: true,
  });
  return res.data;
};
export const startStatusCheck = async (
  readStatus: ReadStatus,
): Promise<AxiosResponse<void>> => {
  const body = {
    readStatus,
  };
  const res = await axios.post(`${baseURL}/StatusCheck`, body, {
    withCredentials: true,
  });
  return res.data;
};
