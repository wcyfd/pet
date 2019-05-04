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
			this.module.addEventListener(GameData.EVT_LEVEL1_ITEM_CHANGE, this.onClickLevel1Item, this);
			this.buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy, this);
		}

		public childrenCreated(): void {
			super.childrenCreated();

			this.changeDataProvider();
		}

		public removeChildren(): void {
			super.removeChildren();

			this.module.removeEventListener(GameData.EVT_LEVEL1_ITEM_CHANGE, this.onClickLevel1Item, this);
			this.buy.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuy, this);
		}

		private changeDataProvider(): void {
			let entity = GameData.level2Data.getItemAt(GameData.menuState).getItemAt(GameData.level1State) as ShopItem;
			this.list.dataProvider = entity.proto.collection;
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