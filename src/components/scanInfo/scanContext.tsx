// src/BookContext.tsx
import React, {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  useReducer,
} from "react";
import { NewsletterInfo, ReadStatus } from "../type";
import { filterScanMail } from "./scanUtils";

interface IScanContextValue {
  data: NewsletterInfo[];
  totalEmailScan: number;
  totalEmailSize: string;
  totalNewsLetterFound: number;
  totalNewsLetterMail: number;
  duration: ReadStatus;
}

type ScanContextAction =
  | {
      type: "UPDATE_DATA";
      payload: { data: NewsletterInfo[]; totalEmailScan: number };
    }
  | { type: "SET_SCAN_DURATION"; payload: { duration: ReadStatus } };

const initialState: IScanContextValue = {
  data: [],
  totalEmailScan: 0,
  totalEmailSize: "",
  totalNewsLetterFound: 0,
  totalNewsLetterMail: 0,
  duration: ReadStatus.notInUse,
};

const reducer = (
  state: IScanContextValue,
  action: ScanContextAction,
): IScanContextValue => {
  switch (action.type) {
    case "UPDATE_DATA": {
      const totals = filterScanMail(action.payload.data, ReadStatus.notInUse);
      return {
        totalEmailScan: totals.totalNewsLetterCount,
        data: action.payload.data,
        totalNewsLetterFound: totals.totalNewsLetterMail,
        totalEmailSize: totals.totalEmailSize,
        totalNewsLetterMail: action.payload.data.length,
        duration: state.duration,
      };
    }
    case "SET_SCAN_DURATION": {
      const calTotal = filterScanMail(state.data, action.payload.duration);
      return {
        totalEmailScan: calTotal.totalNewsLetterCount,
        data: state.data,
        totalNewsLetterFound: calTotal.totalNewsLetterMail,
        totalEmailSize: calTotal.totalEmailSize,
        totalNewsLetterMail: state.data.length,
        duration: action.payload.duration,
      };
    }
    default:
      return state;
  }
};

const ScanContext = createContext<
  | { state: IScanContextValue; dispatch: Dispatch<ScanContextAction> }
  | undefined
>(undefined);

const ScanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ScanContext.Provider value={{ state, dispatch }}>
      {children}
    </ScanContext.Provider>
  );
};

const useScanDataContext = () => {
  const context = useContext(ScanContext);
  if (!context) {
    throw new Error("useScanContext must be used within a ScanProvider");
  }
  return context;
};

export { ScanProvider as ScanProvider, useScanDataContext };
