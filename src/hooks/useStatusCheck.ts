import { AxiosResponse } from "axios";
import { UseMutationOptions, useMutation } from "react-query";
import { startStatusCheck } from "../service/api";
import { ReadStatus } from "../components/type";

const useStatusCheck = (
  options?: UseMutationOptions<AxiosResponse<void>, Error, ReadStatus>,
) => {
  return useMutation(startStatusCheck, options);
};
export default useStatusCheck;
