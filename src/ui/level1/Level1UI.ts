module pet {
	export class Level1UI extends pet.BaseUI {
		public list: eui.List;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

			this.module.addEventListener(GameData.EVT_CHOOSE_MENU_ITEM, this.onClickMenuItem, this);
			this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this);
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		protected childrenCreated(): void {
			super.childrenCreated();

			this.list.dataProvider = GameData.level1Data.getItemAt(0);
			this.list.selectedIndex = 0;
		}

		private onClickMenuItem(e: egret.Event): void {

			this.list.dataProvider = GameData.level1Data.getItemAt(GameData.menuState);
		}

		private onClickItem(e: eui.PropertyEvent): void {
			GameData.level1State = this.list.selectedIndex;
			//获取点击消息
			this.dispatchEventWith(GameData.EVT_CLICK_LEVEL1_ITEM, false, {}, false);
		}


	}
}