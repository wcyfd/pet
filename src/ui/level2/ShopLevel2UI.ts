module pet {
	export class ShopLevel2UI extends pet.BaseUI {
		public list: eui.List;
		public buy: eui.Button;

		public constructor() {
			super();
		}

		public createChildren(): void {
			super.createChildren();

			this.list.itemRendererSkinName = KeyValueItemUISkin;
			this.module.addEventListener(GameData.SC_EVT_LEVEL1_ITEM_CHANGE, this.onClickLevel1Item, this);
			this.buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy, this);
		}

		private changeDataProvider(): void {
			console.log(egret.getQualifiedClassName(this) + ` ,menuState=${GameData.menuState},level1State=${GameData.level1State}`);
			let entity = GameData.level2Data.getItemAt(GameData.menuState).getItemAt(GameData.level1State) as ShopItem;
			this.list.dataProvider = entity.proto.collection;
		}

		public childrenCreated(): void {
			super.childrenCreated();

			this.changeDataProvider();
		}

		public removeChildren(): void {
			super.removeChildren();
			console.info(egret.getQualifiedClassName(this) + " remove listener");

			this.module.removeEventListener(GameData.SC_EVT_LEVEL1_ITEM_CHANGE, this.onClickLevel1Item, this);
			this.buy.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy, this);
		}

		private onClickLevel1Item(evt: egret.Event): void {
			this.changeDataProvider();
		}

		private onBuy(): void {
			let shopItem = GameData.level2Data.getItemAt(GameData.menuState).getItemAt(GameData.level1State) as ShopItem;
			let prop = new pet.Prop();
			prop.proto = shopItem.proto;
			GameData.props.addItem(prop);
			GameData.propNameList.addItem(prop.proto.name);
		}
	}
}