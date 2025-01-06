import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters } from '../../../store/slices/filtersSearchSlice';
import { useFindAnnouncementsByFiltersQuery } from '../../../graphql/generated/output';
import PreviewBigAdvertisment from '../PreviewAdvertisment/PreviewBlocks/PreviewBigAdvertisment/PreviewBigAdvertisment';
import PreviewSmallAdvertisment from '../PreviewAdvertisment/PreviewBlocks/PreviewSmallAdvertisment/PreviewSmallAdvertisment';
import SmallSkeleton from '../Skeleton/SmallSkeleton/SmallSkeleton'; 

import styles from './advertisment.module.css';
import { useParams } from 'react-router-dom';
import BigSkeleton from '../Skeleton/BigSkeleton/BigSkeleton';

const AdvertisementList: React.FC = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const [skip, setSkip] = useState(0);
  const [allAdvertisements, setAllAdvertisements] = useState<any[]>([]);
  console.log(allAdvertisements)
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true); 

  let filters = useSelector((state: any) => state.filtersSearch);

  if (categoryId) {
    filters = { ...filters, categoryId };
  }

  const { data: filteredData, loading } = useFindAnnouncementsByFiltersQuery({
    variables: { filters: { ...filters, skip } },
  });

  useEffect(() => {
    if (filteredData?.findAnnouncementsByFilters) {
      setAllAdvertisements((prev) => [
        ...prev,
        ...filteredData.findAnnouncementsByFilters,
      ]);
      setHasMore(filteredData.findAnnouncementsByFilters.length === filters.take);
    }
    setLoadingMore(false);
  }, [filteredData, filters.take]);

  useEffect(() => {
    setAllAdvertisements([]);
    setSkip(0);
  }, [filters, categoryId, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && !loading && !loadingMore && hasMore) {
        setLoadingMore(true);
        setSkip((prevSkip) => prevSkip + filters.take); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, filters.take, loadingMore, hasMore]);

  const renderAdvertisements = () => {
    if (loading) {
      return Array.from({ length: filters.take }).map((_, index) => (
        filters.displayType === 'small'
        ? <SmallSkeleton key={index} />
        : <BigSkeleton key={index} />  
      ));
    }

    if (allAdvertisements.length === 0) {
      return <div>Нет объявлений для отображения</div>;
    }
    
    return allAdvertisements.map((announcement: any, index: React.Key | null | undefined) => (
      filters.displayType === 'small'
        ? <PreviewSmallAdvertisment key={index} input={announcement} />
        : <PreviewBigAdvertisment key={index} input={announcement} useStylesProfile={false} />
    ));
  };

  return (
    <div className={`${styles.container} ${filters.displayType === 'small' ? styles.small : styles.big}`}>
      {renderAdvertisements()}
      
      {loadingMore && <div className={styles.loader}>Загрузка...</div>}
    </div>
  );
};

export default AdvertisementList;
