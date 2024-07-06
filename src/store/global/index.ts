import { createSlice } from "@reduxjs/toolkit";
const globalTheme = {
  components: {
    Layout: {
      headerBg: "#fff",
      siderBg: "#001529",
    },
    Menu: {
      darkItemBg: "#001529",
      darkItemSelectedBg: "#1677ff",
    },
  },
};

export const globalThemeSlice = createSlice({
  name: "globalTheme",
  initialState: {
    theme: globalTheme,
  },
  reducers: {
    // 头部主题
    changeHeaderBgColor: (state, payload) => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.theme.components.Layout.headerBg = payload.payload;
    },
    // 菜单主题
    changeAsideBgColor: (state, payload) => {
      state.theme.components.Layout.siderBg = payload.payload;
      state.theme.components.Menu.darkItemBg = payload.payload;
    },
    changeAsideItemBgColor: (state, payload) => {
      state.theme.components.Menu.darkItemSelectedBg = payload.payload;
    },
    // 主题头部重置
    resetHeaderBgColor: (state) => {
      state.theme.components.Layout.headerBg = "#fff";
    },
    // 主题侧边重置
    resetAsideBgColor: (state) => {
      state.theme.components.Layout.siderBg = "#001529";
      state.theme.components.Menu.darkItemBg = "#001529";
      state.theme.components.Menu.darkItemSelectedBg = "#1677ff";
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const {
  changeHeaderBgColor,
  changeAsideBgColor,
  resetHeaderBgColor,
  resetAsideBgColor,
  changeAsideItemBgColor,
} = globalThemeSlice.actions;

export default globalThemeSlice.reducer;
