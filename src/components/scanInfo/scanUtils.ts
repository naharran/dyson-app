import { NewsletterInfo, ReadStatus } from "../type";
type FilterScanMailType = {
  totalNewsLetterMail: number;
  totalEmailSize: string;
};
export const filterScanMail = (
  data: NewsletterInfo[],
  level: ReadStatus,
): FilterScanMailType => {
  let totalNewsLetterMail: number = 0;
  data.forEach((mail) => {
    if (mail.readStatus === level) {
      totalNewsLetterMail += mail.totalEmails;
    }
  });
  return {
    totalNewsLetterMail,
    totalEmailSize: `${totalNewsLetterMail * 100}mb`,
  };
};
