module pet {
	export class PetLevel2UI extends pet.BaseUI {
		public list: eui.List;

		public constructor() {
			super();
		}

		public createChildren(): void {
			super.createChildren();
			this.list.itemRendererSkinName = KeyValueItemUISkin;
			this.module.addEventListener(GameData.SC_EVT_LEVEL1_ITEM_CHANGE, this.onClickLevel1Item, this);
		}

		private changeDataProvider(): void {
			this.list.dataProvider = GameData.level2Data.getItemAt(GameData.menuState).getItemAt(GameData.level1State).toArrayCollection();
		}
		
		public childrenCreated(): void {
			super.childrenCreated();
			this.changeDataProvider();
		}

		public removeChildren(): void {
			super.removeChildren();
			this.module.removeEventListener(GameData.SC_EVT_LEVEL1_ITEM_CHANGE, this.onClickLevel1Item, this);
		}

		private onClickLevel1Item(evt: egret.Event): void {
			this.changeDataProvider();
		}


	}
}