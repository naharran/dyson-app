import axios, { AxiosResponse } from "axios";
import { ReadStatus, ScanResultsProps } from "../components/type";
import { scanMock } from "../mock";

const baseURL = import.meta.env.VITE_FUNCTIONS_URL;

export const checkStatus = async (): Promise<{
  initLength: number;
  idsLength: number;
}> => {
  return axios
    .get(`${baseURL}/checkStatus`, { withCredentials: true })
    .then((res) => res.data)
    .catch((err) => err);
};
export const getResult = async (): Promise<ScanResultsProps> => {
  return {
    data: scanMock,
    totalNewsLettersFound: 1000,
    totalEmailScan: 888888,
  };
  // return axios
  //   .get(`${baseURL}/getResults`, { withCredentials: true })
  //   .then((res) => res.data)
  //   .catch((err) => err);
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
