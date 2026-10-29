import { NextPage } from 'next';

import { HeroPages } from '@ui/components/index';
import {
  bannerEcommerce,
  bannerEcommerceMobile,
} from '@/public/assets/images/ecommerce';
import { mensajerias } from '@/public/assets/images/services';

import StickyTracking from '@ui/components/StickyTracking';

import { LangInterface } from '@constans/interfaces/langInterface';
import { getDictionary } from '@lib/dictionary';

import { EcommerceBody } from '@servicios/servicios/ecommerce/components/EcommerceBody';

export const MensajeriaExpresa: NextPage<LangInterface> = async ({ lang }) => {
  const { pages } = await getDictionary(lang);
  const content = pages.services.ecommerce;
  const title = pages.services.mensajeriaExpresa.title;

  return (
    <section>
      <HeroPages
        imagePath={bannerEcommerce}
        imagePathMobile={bannerEcommerceMobile}
        imageClassName="object-cover w-full max-h-[360px] max-[500px]:hidden"
        iconPath="/assets/images/home/services/icons/mensajeria-expresa.svg"
        pageTitle={title}
        color="white"
      />
      <EcommerceBody
        lang={lang}
        content={content}
        service={title}
        customImage={mensajerias}
        showMainDescription={false}
        showProviders
      />
      <StickyTracking lang={lang} />
    </section>
  );
};
