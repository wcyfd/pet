module pet {
	export class MathUtil {
		public static randomContainMinMax(min: number, max: number) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		public static randomContainMin(min: number, max: number) {
			return Math.floor(Math.random() * (max - min)) + min;
		}

		public static random(min: number, max: number) {
			return Math.floor((Math.random() * max) + min);
		}

		public static randomBoolean(): boolean {
			if (Math.random() < 0.5) {
				return false;
			} else {
				return true;
			}
		}
	}
}