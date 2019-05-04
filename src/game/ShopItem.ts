module pet {
	export class ShopItem {
		public proto: pet.PropProto;

		public static createShopItem(propId: number): pet.ShopItem {
			let item = new pet.ShopItem();
			item.proto = pet.ProtoManager.propProtos[propId];
			return item;
		}
		public constructor() {
			this.proto = null;
		}

		public toArrayCollection(): eui.ArrayCollection {

			return new eui.ArrayCollection([
				{ key: "商品名", value: `${this.proto.name}` },
				{ key: "商品信息", value: `${this.proto.context}` },
				{ key: "价格", value: `${this.proto.price}` },
			]);
		}
	}
}