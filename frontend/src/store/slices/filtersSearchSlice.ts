import { createSlice } from '@reduxjs/toolkit'

interface FiltersState {
  minPrice: number | null
  maxPrice: number | null
  condition: string | null
  status: string | null
  search: string | null
  take: number
  sort: string | null
  displayType: string
  categoryId: string | null
}

const initialState: FiltersState = {
  minPrice: null,
  maxPrice: null,
  condition: null,
  status: null,
  search: null,
  take: 12,
  sort: 'default',
  displayType: 'small',
  categoryId: null,
}

const filtersSearchSlice = createSlice({
  name: 'filtersSearch',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.minPrice = action.payload.minPrice
      state.maxPrice = action.payload.maxPrice
      state.condition = action.payload.condition
      state.status = action.payload.status
      state.search = action.payload.search
      state.take = action.payload.take
      state.sort = action.payload.sort
      state.displayType = action.payload.displayType
    },
    setSearchValue: (state, action) => {
      state.search = action.payload
    },
    resetFilters: state => {
      state.minPrice = null
      state.maxPrice = null
      state.condition = null
      state.status = null
      state.search = null
      state.take = 12
      state.sort = null
      state.displayType = 'small'
    },
  },
})

export const { setFilters, resetFilters, setSearchValue } =
  filtersSearchSlice.actions
export default filtersSearchSlice.reducer
