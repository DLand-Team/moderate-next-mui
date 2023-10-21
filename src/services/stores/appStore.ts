const initState = () => {
	return {
		isMobile: false,
		info: "",
	};
};

const appStore = {
	// 状态
	state: initState(),
	// 计算属性
	maps: {},
	// 操作
	actions: {
    setIsMobile(value:boolean) {
			return {
				isMobile: value,
			};
		},
		setInfo(value) {
			return {
				info: value,
			};
		},
	},
};

export default appStore;
