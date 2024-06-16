import { NewsletterInfo, ReadStatus } from "../type";
type FilterScanMailType = {
  totalNewsLetterMail: number;
  totalEmailSize: string;
  totalNewsLetterCount: number;
};
export function formatSize(kb: number) {
  const kbToMb = kb / 1024;
  const kbToGb = kbToMb / 1024;
  const kbToTb = kbToGb / 1024;

  if (kbToMb < 1) {
    return `${kb} KB`;
  } else if (kbToMb >= 1 && kbToGb < 1) {
    return `${kbToMb.toFixed(2)} MB`;
  } else if (kbToGb >= 1 && kbToTb < 1) {
    return `${kbToGb.toFixed(2)} GB`;
  } else {
    return `${kbToTb.toFixed(2)} TB`;
  }
}
export const filterScanMail = (
  data: NewsletterInfo[],
  level: ReadStatus,
): FilterScanMailType => {
  let totalNewsLetterMail: number = 0;
  let totalNewsLetterCount: number = 0;
  data.forEach((mail) => {
    if (mail.readStatus === level || mail.readStatus < level) {
      totalNewsLetterMail += mail.totalEmails;
      totalNewsLetterCount++;
    }
  });
  return {
    totalNewsLetterMail,
    totalEmailSize: formatSize(totalNewsLetterMail * 100),
    totalNewsLetterCount,
  };
};
