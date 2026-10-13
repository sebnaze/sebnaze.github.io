import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const sortedPortfolioItems = useMemo(() => [...portfolioItems].sort((a, b) => (b.year ?? 0) - (a.year ?? 0)), []);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Selected Projects</h2>

        {/* Mobile: 2 columns */}
        <div className="grid w-full grid-cols-2 gap-4 md:hidden">
          {[0, 1].map(colIdx => (
            <div className="flex flex-col gap-y-4" key={`col-2-${colIdx}`}>
              {sortedPortfolioItems
                .filter((_, idx) => idx % 2 === colIdx)
                .map((item, index) => (
                  <PortfolioCard item={item} key={`${item.title}-${index}`} />
                ))}
            </div>
          ))}
        </div>

        {/* Tablet: 3 columns */}
        <div className="hidden w-full md:grid md:grid-cols-3 md:gap-4 lg:hidden">
          {[0, 1, 2].map(colIdx => (
            <div className="flex flex-col gap-y-4" key={`col-3-${colIdx}`}>
              {sortedPortfolioItems
                .filter((_, idx) => idx % 3 === colIdx)
                .map((item, index) => (
                  <PortfolioCard item={item} key={`${item.title}-${index}`} />
                ))}
            </div>
          ))}
        </div>

        {/* Desktop: 4 columns */}
        <div className="hidden w-full lg:grid lg:grid-cols-4 lg:gap-4">
          {[0, 1, 2, 3].map(colIdx => (
            <div className="flex flex-col gap-y-4" key={`col-4-${colIdx}`}>
              {sortedPortfolioItems
                .filter((_, idx) => idx % 4 === colIdx)
                .map((item, index) => (
                  <PortfolioCard item={item} key={`${item.title}-${index}`} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const PortfolioCard: FC<{item: PortfolioItem}> = memo(({item}) => {
  const {title, image} = item;
  return (
    <div
      className={classNames('relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl')}>
      <Image alt={title} className="h-auto w-full" placeholder="blur" src={image} />
      <ItemOverlay item={item} />
    </div>
  );
});

PortfolioCard.displayName = 'PortfolioCard';

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description, year}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <div className="flex flex-col items-center">
            {year && (
              <span className="rounded bg-orange-500/80 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                {year}
              </span>
            )}
            <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          </div>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
