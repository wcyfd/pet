module pet {
	export class PropProto extends pet.BaseProto {
		public name: string;
		public price: number;
		public context: string;
		public collection: eui.ArrayCollection;
		public constructor() {
			super();
			this.name = null;
			this.price = 0;
			this.context = null;
		}

		public init(): void {
			this.collection = new eui.ArrayCollection([
				{ key: "商品名", value: `${this.name}` },
				{ key: "商品信息", value: `${this.context}` },
				{ key: "价格", value: `${this.price}` },
			]);
		}

	}
}