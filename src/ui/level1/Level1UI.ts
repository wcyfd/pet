module pet {
	export class Level1UI extends pet.BaseUI {
		public list: eui.List;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

			this.module.addEventListener(GameData.SC_EVT_CHOOSE_MENU_ITEM, this.onClickMenuItem, this);
			this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this);
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		protected childrenCreated(): void {
			super.childrenCreated();

			this.list.dataProvider = GameData.level1Data.getItemAt(0);
			this.list.selectedIndex = -1;
		}

		private onClickMenuItem(e: egret.Event): void {
			// let c = GameData.level1Data.getItemAt(GameData.menuState);
			let menu = GameData.menuItemList.getItemAt(GameData.menuState);
			let c: eui.ArrayCollection = null;
			if (menu.target && menu.target != "") {
				c = GameData.layer1NameList[menu.target];
			}

			this.list.dataProvider = c;
			this.list.selectedIndex = -1;
		}

		private onClickItem(e: eui.PropertyEvent): void {
			GameData.level1State = this.list.selectedIndex;
			//获取点击消息
			this.dispatchEventWith(GameData.CS_EVT_CLICK_LEVEL1_ITEM, false, {}, false);
		}


	}
}