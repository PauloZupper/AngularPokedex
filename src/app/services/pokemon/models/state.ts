import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MenuManager, FeatureManager, ModuleManager, ProfileManager, FeatureToggleManager } from '@domain/usecases'

//exemplo para gerenciador de estados
export type SliceAccessControl = {
  mode:
    'newMenu'
  | 'removeMenu'
  | 'editMenu'
  | 'newFeature'
  | 'removeFeature'
  | 'editFeature'
  | 'newModule'
  | 'editModule'
  | 'removeModule'
  | 'newProfile'
  | 'editProfile'
  | 'removeProfile'
  | 'updateFeatureToggle'
  | 'none',
  currentMenu?: MenuManager.MenuModel,
  currentFeature?: FeatureManager.FeatureModel,
  currentModule?: ModuleManager.ModuleModel,
  currentProfile?: ProfileManager.ProfileModel,
  cuttentToggle?: FeatureToggleManager.FeatureToggleModel
}

const initialState: SliceAccessControl = {
  mode: 'none',
  currentMenu: undefined,
  currentFeature: undefined,
  currentModule: undefined,
  currentProfile: undefined,
  cuttentToggle: undefined
}

const accessControl = createSlice({
  name: 'access-control',
  initialState,
  reducers: {
    onSetMode(state, action: PayloadAction<SliceAccessControl['mode']>) {
      state.mode = action.payload
    },
    onSetcurrentMenu(state, action: PayloadAction<SliceAccessControl['currentMenu']>) {
      state.currentMenu = action.payload
    },
    onSetcurrentFeature(state, action: PayloadAction<SliceAccessControl['currentFeature']>) {
      state.currentFeature = action.payload
    },
    onSetcurrentModule(state, action: PayloadAction<SliceAccessControl['currentModule']>) {
      state.currentModule = action.payload
    },
    onSetcurrentProfile(state, action: PayloadAction<SliceAccessControl['currentProfile']>) {
      state.currentProfile = action.payload
    },
    onSetcurrentToggle(state, action: PayloadAction<SliceAccessControl['cuttentToggle']>) {
      state.cuttentToggle = action.payload
    },
    onResetMode(state) {
      state.mode = 'none'
      state.currentMenu = undefined
      state.currentFeature = undefined
      state.currentModule = undefined
      state.currentProfile = undefined
      state.cuttentToggle = undefined
    },
  },
})

export const actions = accessControl.actions

export default accessControl.reducer
