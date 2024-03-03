type ScanMetaDataProps = {
  totalNewsLettersFound: number;
  emailsDeleted: number;
  freeSize: number;
};
const ScanMetaData = ({
  totalNewsLettersFound,
  emailsDeleted,
  freeSize,
}: ScanMetaDataProps) => {
  return (
    <div className="flex flex-col  mb-5 mt-5">
      <p> scan info</p>
      <div className="flex">
        <span className="ml-1">Total email deleted: {emailsDeleted}</span>
        <span className="mx-1">
          Number of news letters found: {totalNewsLettersFound}
        </span>
        <span className="mr-1">Total size clean: {freeSize} </span>
      </div>
    </div>
  );
};

export default ScanMetaData;
