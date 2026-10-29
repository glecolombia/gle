import { BodyServices } from '@ui/components/index';
import { ecommerceImage } from '@/public/assets/images/ecommerce';
import { StaticImageData } from 'next/image';

interface EcommerceContent {
  additionDescription: Record<string, string>;
  imageInfo: string;
  mainDescription: string;
  sideTextTitle: string;
  title: string;
}

export const buildIntroText = (content: EcommerceContent) => (
  <>
    <p>{content.mainDescription}</p>
    <ul className="list-disc mt-5 ml-10">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <li key={item}>{content.additionDescription[item]}</li>
      ))}
    </ul>
  </>
);

interface EcommerceBodyProps {
  content: EcommerceContent;
  customImage?: StaticImageData;
  lang: string;
  service: string;
  showContract?: boolean;
  showImage?: boolean;
  showMainDescription?: boolean;
  showProviders?: boolean;
  showRates?: boolean;
  textAfterImage?: React.ReactNode;
}

export const EcommerceBody = ({
  content,
  customImage,
  lang,
  service,
  showContract = true,
  showImage = true,
  showMainDescription = true,
  showProviders = false,
  showRates = true,
  textAfterImage,
}: EcommerceBodyProps) => {
  return (
    <BodyServices
      lang={lang}
      mainDescription={
        showMainDescription ? buildIntroText(content) : undefined
      }
      imageService={ecommerceImage}
      customImage={customImage}
      imageInfo={content.imageInfo}
      sideTextTitle={content.sideTextTitle}
      additionDescription={
        textAfterImage ?? <p>{content.additionDescription[7]}</p>
      }
      showImage={showImage}
      showRates={showRates}
      showContract={showContract}
      showProviders={showProviders}
      service={service}
    />
  );
};
