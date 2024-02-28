import { useQuery } from 'react-query';
import {getResult} from'../service/api';
import { ScanResultsProps } from '../components/type';
function useInfoResults() {
  const { data, error, isLoading, refetch } = useQuery<ScanResultsProps>(
    'uniqueKeyForGetData', 
    getResult
  );

  return { res: data, error, isLoading, refetch };
}

export default useInfoResults