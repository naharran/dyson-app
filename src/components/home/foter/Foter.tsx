import { useTranslation } from "react-i18next";
import Logo from "../../logo";

const HomeFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center grow flex-col bg-gradient-to-t from-[#7C5CFF] to-[#7C5CFF]r  h-[150px]">
      <div className="pt-10">
        <Logo />
      </div>
      <div className="flex flex-col-reverse grow text-white mb-4">
        {t("home.footer.copyWrite")}
      </div>
    </div>
  );
};

export default HomeFooter;
