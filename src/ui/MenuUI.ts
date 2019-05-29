namespace pet {
	export class MenuUI extends pet.BaseUI {
		public menuTabBar: eui.TabBar;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

			//赋值菜单数据
			this.menuTabBar.dataProvider = GameData.menuNames;
			this.menuTabBar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickMenuItem, this);
		}

		protected childrenCreated(): void {
			super.childrenCreated();

		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);

		}

		private onClickMenuItem(e: eui.ItemTapEvent): void {

			GameData.menuState = e.itemIndex;

			this.dispatchEventWith(GameData.CS_EVT_CHOOSE_MENU_ITEM, false, {}, false);
		}
	}
}