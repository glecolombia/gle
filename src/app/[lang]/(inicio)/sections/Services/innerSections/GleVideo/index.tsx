import { FC } from 'react';

import { ArrowGLE } from '@ui/components';

export const GleVideo: FC = () => {
  return (
    <section>
      <div className="flex justify-center items-center flex-wrap gap-10 mt-10 px-5 max-[1000px]:flex-col">
        <video
          className="rounded-2xl w-[45%] max-[1000px]:w-full aspect-video shadow-2xl"
          controls
          src="/assets/videos/compensations/gle13.mp4"
        >
          Tu navegador no soporta el elemento de video.
        </video>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-2xl w-[45%] max-[1000px]:w-full aspect-video shadow-2xl"
          src="https://www.youtube.com/embed/pOp8_WGBYBQ?si=NQFwV5ND7eGkJ6Pn"
          title="Grupo Logístico Especializado"
        ></iframe>
      </div>
    </section>
  );
};
