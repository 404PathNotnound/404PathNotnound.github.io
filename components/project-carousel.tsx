'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

type ProjectCarouselProps = {
  images: string[];
  alt: string;
};

export function ProjectCarousel({ images, alt }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const hasImages = images.length > 0;

  if (!hasImages) return <div className="personal-project-media"><span>Image à ajouter</span></div>;

  const previous = () => setCurrent((index) => (index - 1 + images.length) % images.length);
  const next = () => setCurrent((index) => (index + 1) % images.length);

  return (
    <div className="project-carousel" aria-label={`${alt} — image ${current + 1} sur ${images.length}`}>
      <img src={images[current]} alt={`${alt} — image ${current + 1}`} />
      {images.length > 1 && <>
        <button type="button" className="carousel-button carousel-previous" onClick={previous} aria-label="Image précédente"><ArrowLeft size={17} /></button>
        <button type="button" className="carousel-button carousel-next" onClick={next} aria-label="Image suivante"><ArrowRight size={17} /></button>
        <div className="carousel-dots" aria-hidden="true">{images.map((image, index) => <span className={index === current ? 'active' : ''} key={image} />)}</div>
      </>}
    </div>
  );
}
