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

		public toArrayCollection(): eui.ArrayCollection {
			return new eui.ArrayCollection(
				[
					{ key: "姓名", value: `${this.name}` },
					{ key: "年龄", value: `${this.age}` },
					{ key: "年龄", value: `${this.age}` },
					{ key: "年龄", value: `${this.age}` },
					{ key: "年龄", value: `${this.age}` },
					{ key: "年龄", value: `${this.age}` },
					{ key: "年龄", value: `${this.age}` },
					{ key: "年龄", value: `${this.age}` },
					{ key: "年龄", value: `${this.age}` },
					{ key: "年龄", value: `${this.age}` },
					{ key: "年龄", value: `${this.age}` },
					{ key: "年龄", value: `${this.age}` },
					{ key: "体重", value: `${this.weight}` }
				]
			);
		}

		public toString(): string {
			return "name=" + this.name + ",age=" + this.age + ",weight=" + this.weight;
		}
	}
}