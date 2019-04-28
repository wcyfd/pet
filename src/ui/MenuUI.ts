namespace pet {
	export class MenuUI extends pet.BaseUI {
		public menuTabBar: eui.TabBar;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

			//赋值菜单数据
			this.menuTabBar.dataProvider = GameData.menuItemList;
			this.menuTabBar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
		}

		protected childrenCreated(): void {
			super.childrenCreated();

		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);

		}

		private onBarItemTap(e: eui.ItemTapEvent): void {
			console.log(e.itemIndex);

			this.dispatchEventWith(GameData.EVT_CHOOSE_MENU_ITEM, false, { index: e.itemIndex }, false);
		}
	}

	export class MenuItemUI extends eui.Component {

	}
}