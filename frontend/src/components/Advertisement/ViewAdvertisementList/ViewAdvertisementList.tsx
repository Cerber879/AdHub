import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, resetFilters } from '../../../store/slices/filtersSearchSlice';
import { useFindAnnouncementsByFiltersQuery } from '../../../graphql/generated/output';
import PreviewBigAdvertisment from '../PreviewAdvertisment/PreviewBlocks/PreviewBigAdvertisment/PreviewBigAdvertisment';
import PreviewSmallAdvertisment from '../PreviewAdvertisment/PreviewBlocks/PreviewSmallAdvertisment/PreviewSmallAdvertisment';
import { useParams } from 'react-router-dom';
import AdvertisementTop from '../AdvertismentPage/AdvertismentTop/AdvertismentTop';

const AdvertisementList: React.FC = () => {
  const dispatch = useDispatch();

  const { categoryId } = useParams();

  let filters = useSelector((state: any) => state.filtersSearch);
  if(categoryId)
  {
    filters = {...filters, categoryId};
  }
  const { data: filteredData } = useFindAnnouncementsByFiltersQuery({ variables: { filters: filters } });
  const advertisements = filteredData?.findAnnouncementsByFilters;

  const handleDisplayTypeChange = (type: string) => {
    dispatch(setFilters({ ...filters, displayType: type }));
  };

  const handleSortChange = (sort: string) => {
    dispatch(setFilters({ ...filters, sort }));
  };

  useEffect(() => {
    if (!categoryId) {
      dispatch(resetFilters());
    }
  }, [categoryId, dispatch]);

  return (
    <div>
      <div>
        <AdvertisementTop/>
        <div>
          <button onClick={() => handleDisplayTypeChange('small')}>Маленькие объявления</button>
          <button onClick={() => handleDisplayTypeChange('big')}>Большие объявления</button>
          <button onClick={() => handleSortChange('price_asc')}>Сортировка по цене (возрастание)</button>
          <button onClick={() => handleSortChange('price_desc')}>Сортировка по цене (убывание)</button>
        </div>
        {advertisements?.map((announcement: any, index: React.Key | null | undefined) => (
          filters.displayType === 'small'
            ? <PreviewSmallAdvertisment key={index} input={announcement} />
            : <PreviewBigAdvertisment key={index} input={announcement} />
        ))}
      </div>
    </div>
  );
};

export default AdvertisementList;
