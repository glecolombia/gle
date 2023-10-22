import { ProhibitedTransportShipments } from "@others/(prohibido-transporte)/prohibido-transporte/container/ProhibitedTransportShipments";
import { Locale } from "@/i18n.config";

const BulkLoadPage = async ({ params }: { params: { lang: Locale } }) => {
  return <ProhibitedTransportShipments lang={params.lang} />;
};

export default BulkLoadPage;
