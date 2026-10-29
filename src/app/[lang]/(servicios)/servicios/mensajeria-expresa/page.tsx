import { MensajeriaExpresa } from "@servicios/servicios/mensajeria-expresa/container/MensajeriaExpresa";
import { Locale } from "@/i18n.config";

const MensajeriaExpresaPage = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  return <MensajeriaExpresa lang={params.lang} />;
};

export default MensajeriaExpresaPage;
