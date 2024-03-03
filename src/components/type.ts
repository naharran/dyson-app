export interface NewsletterInfo {
  domain: string;
  unsubscribe_link: string;
  unsubscribe_status: number;
  restore: "pending" | "true";
  id: string;
  userEmail: string;
}
export type ScanResultsProps = {
  data: NewsletterInfo[];
  totalNewsLettersFound: number;
  emailsDeleted: number;
  newslettersProcessed: number;
};
export enum UnsubscribeStatus {
  "pending" = 0,
  "failed" = 1,
  "success" = 2,
}
