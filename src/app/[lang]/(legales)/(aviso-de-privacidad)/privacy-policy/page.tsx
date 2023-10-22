import { PrivacyPolicy } from "../aviso-de-privacidad/container/PrivacyPolicy";
import { Locale } from "@/i18n.config";

const BulkLoadPage = async ({ params }: { params: { lang: Locale } }) => {
  return <PrivacyPolicy lang={params.lang} />;
};

export default BulkLoadPage;
