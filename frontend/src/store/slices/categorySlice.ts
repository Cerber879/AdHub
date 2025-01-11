import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CategoryState {
  currentIdCategory: string
  currentNameCategory: string | null
  selectIdCategories: string[]
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
    addSelectIdCategory: (state, action: PayloadAction<string>) => {
      state.selectIdCategories.push(action.payload)
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
  addSelectIdCategory,
  clearCategories,
} = categorySlice.actions
export default categorySlice.reducer
