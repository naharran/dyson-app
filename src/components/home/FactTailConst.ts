import { SvgIcon } from "../type";
import { ReactComponent as Backup } from "@assets/Backup_Icon.svg";
import { ReactComponent as FastIcon } from "@assets/Fast_Icon.svg";
import { ReactComponent as Single } from "@assets/Single_Icon.svg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const factList: { Icon: SvgIcon; title: string; text: string }[] = [
  {
    Icon: Backup,
    title: "home.factList.factNum1.title",
    text: "home.factList.factNum1.text",
  },
  {
    Icon: Single,
    title: "home.factList.factNum2.title",
    text: "home.factList.factNum2.text",
  },
  {
    Icon: FastIcon,
    title: "home.factList.factNum3.title",
    text: "home.factList.factNum3.text",
  },
];
