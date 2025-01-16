import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SubCategories {
  id: string
  level: number
}

export interface CategoryState {
  currentIdCategory: string
  currentNameCategory: string | null
  selectIdCategories: SubCategories[]
  showCatalogueModal: boolean
}

const initialState: CategoryState = {
  currentIdCategory: '',
  currentNameCategory: null,
  selectIdCategories: [],
  showCatalogueModal: false,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCurrentCategory: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      state.currentIdCategory = action.payload.id
      state.currentNameCategory = action.payload.name
    },
    setShowCatalogueModal: (state, action: PayloadAction<boolean>) => {
      state.showCatalogueModal = action.payload
    },
    addSelectCategories: (state, action: PayloadAction<SubCategories[]>) => {
      state.selectIdCategories = action.payload
    },
    clearCategories: state => {
      state.currentIdCategory = ''
      state.selectIdCategories = []
    },
  },
})

export const {
  setCurrentCategory,
  setShowCatalogueModal,
  addSelectCategories,
  clearCategories,
} = categorySlice.actions
export default categorySlice.reducer
