module pet {
	export class Animal {
		public name: string;
		public age: number;
		public weight: number;
		public constructor() {
			this.name = null;
			this.age = 0;
			this.weight = 0;
		}

		public toString(): string {
			return "name=" + this.name + ",age=" + this.age + ",weight=" + this.weight;
		}
	}
}