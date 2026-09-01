import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, useReducedMotion, motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCardProps {
  img: GalleryImage;
  absoluteIndex: number;
  onOpen: (i: number) => void;
}

function ImageCard({ img, absoluteIndex, onOpen }: ImageCardProps) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-2xl"
      onClick={() => onOpen(absoluteIndex)}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Maximize2 className="size-7 text-primary-foreground drop-shadow" />
      </div>
    </div>
  );
}

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? 0;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - (e.changedTouches[0]?.clientX ?? 0);
    if (Math.abs(delta) < 50) return;
    if (delta > 0) {
      setLightboxIndex((i) => ((i ?? 0) + 1) % images.length);
    } else {
      setLightboxIndex((i) => ((i ?? 0) - 1 + images.length) % images.length);
    }
  };

  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ['start end', 'end start'],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -120]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 120]);
  const translateThird = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -120]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((i) => ((i ?? 0) + 1) % images.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => ((i ?? 0) - 1 + images.length) % images.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [lightboxIndex, images.length]);

  return (
    <>
      {/* Mobile swipeable carousel */}
      <div className="mt-8 md:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((img, idx) => (
            <div key={idx} className="w-[80vw] shrink-0 snap-center">
              <ImageCard img={img} absoluteIndex={idx} onOpen={setLightboxIndex} />
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">Swipe to browse</p>
      </div>

      {/* Desktop parallax grid */}
      <div ref={gridRef} className="mt-8 hidden w-full md:block">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-4">
            {firstPart.map((img, idx) => (
              <motion.div key={'c1-' + idx} style={isMobile ? {} : { y: translateFirst }}>
                <ImageCard img={img} absoluteIndex={idx} onOpen={setLightboxIndex} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {secondPart.map((img, idx) => (
              <motion.div key={'c2-' + idx} style={isMobile ? {} : { y: translateSecond }}>
                <ImageCard img={img} absoluteIndex={third + idx} onOpen={setLightboxIndex} />
              </motion.div>
            ))}
          </div>
          {thirdPart.length > 0 && (
            <div className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
              {thirdPart.map((img, idx) => (
                <motion.div key={'c3-' + idx} style={isMobile ? {} : { y: translateThird }}>
                  <ImageCard img={img} absoluteIndex={2 * third + idx} onOpen={setLightboxIndex} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            aria-label="Close"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <X className="size-5" />
          </button>

          <button
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length); }}
            className="absolute left-4 grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <ChevronLeft className="size-6" />
          </button>

          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length); }}
            className="absolute right-4 grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="absolute inset-x-0 bottom-5 flex flex-col items-center gap-1 px-8 text-center">
            {images[lightboxIndex].caption && (
              <p className="text-sm text-white/90 font-medium drop-shadow">
                {images[lightboxIndex].caption}
              </p>
            )}
            <p className="text-xs text-white/40">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
