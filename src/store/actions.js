const actions = {
	setFileName: ({ commit }, fileName) => {
		return commit('SET_FILENAME', fileName)
	},
	setmenuVisible: ({ commit }, menuVisible) => {
		return commit('SET_MENUVISIBLE', menuVisible)
	},
	setSettingVisible: ({ commit }, settingVisible) => {
		return commit('SET_SETTINGVISIBLE', settingVisible)
	},
	setDefaultFontSize: ({ commit }, defaultFontSize) => {
		return commit('SET_DEFAULTFONTSIZE', defaultFontSize)
	},
	setCurrentBook: ({ commit }, currentBook) => {
		return commit('SET_CURRENTBOOK', currentBook)
	},
	setDefaultFontFamily: ({ commit }, defaultFontFamily) => {
		return commit('SET_DEFAULTFONTFAMILY', defaultFontFamily)
	},
	setFontFamilyVisible: ({ commit }, fontFamilyVisible) => {
		return commit('SET_FONTFAMILYVISIBLE', fontFamilyVisible)
	},
	setDefaultTheme:  ({ commit }, defaultTheme) => {
		return commit('SET_DEFAULTTHEME', defaultTheme)
	},
	setProgress:  ({ commit }, progress) => {
		return commit('SET_PROGRESS', progress)
	},
	setBookAvailable: ({ commit }, bookAvailable) => {
		return commit('SET_BOOKAVAILABLE', bookAvailable)
	},
	setSection: ({ commit }, section) => {
		return commit('SET_SECTION', section)
	},
	setCover: ({ commit }, cover) => {
		return commit('SET_COVER', cover)
	},
	setMetadata: ({ commit }, metadata) => {
    return commit('SET_METADATA', metadata)
  },
}
export default actions