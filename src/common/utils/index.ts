export const UUID = () => {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		function (c) {
			var r = (Math.random() * 16) | 0,
				v = c === "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		}
	);
};

// 冒泡排序
export function bubbleSort<T>(arr: T[], callF: (a: T, b: T) => boolean) {
	if (arr.length <= 1) {
		return arr;
	}
	for (var i = 0; i < arr.length; i++) {
		var flag = false;
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (callF(arr[j], arr[j + 1])) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				flag = true;
			}
		}
		if (!flag) {
			break;
		}
	}
	return arr;
}
