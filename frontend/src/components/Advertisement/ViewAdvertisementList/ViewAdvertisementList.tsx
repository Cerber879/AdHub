import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFindAnnouncementsByFiltersQuery } from '../../../graphql/generated/output';
import PreviewBigAdvertisment from '../PreviewAdvertisment/PreviewBlocks/PreviewBigAdvertisment/PreviewBigAdvertisment';
import PreviewSmallAdvertisment from '../PreviewAdvertisment/PreviewBlocks/PreviewSmallAdvertisment/PreviewSmallAdvertisment';
import SmallSkeleton from '../Skeleton/SmallSkeleton/SmallSkeleton'; 

import styles from './advertisment.module.css';
import { useParams } from 'react-router-dom';
import BigSkeleton from '../Skeleton/BigSkeleton/BigSkeleton';

const AdvertisementList: React.FC = () => {
  const { categoryId } = useParams();

  const [skip, setSkip] = useState(0);
  const [allAdvertisements, setAllAdvertisements] = useState<any[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true); 

  const [searchKey, setSearchKey] = useState(0); 

  const globalFilters = useSelector((state: any) => state.filtersSearch);
  const filters = useMemo(() => {
    return categoryId ? { ...globalFilters, categoryId } : globalFilters;
  }, [categoryId, globalFilters]);

  const { data: filteredData, loading } = useFindAnnouncementsByFiltersQuery({
    variables: { filters: { ...filters, skip } },
  });

  useEffect(() => {
    if (filteredData?.findAnnouncementsByFilters) {
      setAllAdvertisements((prev) =>
        skip === 0 
          ? filteredData.findAnnouncementsByFilters
          : [...prev, ...filteredData.findAnnouncementsByFilters]
      );
      setHasMore(filteredData.findAnnouncementsByFilters.length === filters.take);
    }
    setLoadingMore(false);
  }, [filteredData, skip, filters.take]);

  useEffect(() => {
    setSearchKey((prev) => prev + 1); 
    setSkip(0); 
  }, [filters, categoryId]); 

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !loading &&
        !loadingMore &&
        hasMore
      ) {
        setLoadingMore(true);
        setSkip((prevSkip) => prevSkip + filters.take); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, filters.take, loadingMore, hasMore]);

  const renderAdvertisements = () => {
    if (loading && skip === 0) {
      return Array.from({ length: filters.take }).map((_, index) =>
        filters.displayType === 'small'
          ? <SmallSkeleton key={index} />
          : <BigSkeleton key={index} />
      );
    }

    if (allAdvertisements.length === 0) {
      return <div className={styles.empty}>Нет объявлений для отображения</div>;
    }
    
    return allAdvertisements.map((announcement: any, index: React.Key | null | undefined) => (
      filters.displayType === 'small'
        ? <PreviewSmallAdvertisment key={index} input={announcement} />
        : <PreviewBigAdvertisment key={index} input={announcement} useStylesProfile={false} />
    ));
  };

  return (
    <div
      key={searchKey}
      className={`${styles.container} ${filters.displayType === 'small' ? styles.small : styles.big}`}
    >
      {renderAdvertisements()}
      
      {loadingMore && <div className={styles.loader}>Загрузка...</div>}
    </div>
  );
};

export default AdvertisementList;
