import { NextPage } from 'next';

import { HeroPages } from '@ui/components/index';
import {
  bannerEcommerce,
  bannerEcommerceMobile,
  ecommerceIcon,
} from '@/public/assets/images/ecommerce';
import { ecommerces } from '@/public/assets/images/services';

import StickyTracking from '@ui/components/StickyTracking';

import { LangInterface } from '@constans/interfaces/langInterface';
import { getDictionary } from '@lib/dictionary';

import {
  EcommerceBody,
  buildIntroText,
} from '@servicios/servicios/ecommerce/components/EcommerceBody';

export const Ecommerce: NextPage<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);
  const content = pages.services.ecommerce;

  return (
    <section>
      <HeroPages
        imagePath={bannerEcommerce}
        imagePathMobile={bannerEcommerceMobile}
        imageClassName="object-cover w-full max-h-[360px] max-[500px]:hidden"
        iconPath={ecommerceIcon}
        pageTitle={content.title}
        color="white"
      />
      <EcommerceBody
        lang={lang}
        content={content}
        service={content.title}
        customImage={ecommerces}
        showMainDescription={false}
        showContract={false}
        showRates={false}
        textAfterImage={buildIntroText(content)}
      />
      <StickyTracking lang={lang} />
    </section>
  );
};
