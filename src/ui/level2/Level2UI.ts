module pet {
	export class Level2UI extends pet.BaseUI {

		private uiState: number;
		private baseUI: pet.BaseUI;

		public constructor() {
			super();
			this.uiState = -1;

		}

		protected createChildren(): void {
			super.createChildren();

			//赋值菜单数据
			this.module.addEventListener(GameData.EVT_CLICK_LEVEL1_ITEM, this.onClickLevel1Item, this);
		}

		public removeChildren(): void {
			super.removeChildren();
			console.info("level2UI remove");
		}

		/**
		 * 点击了第一层
		 */
		public onClickLevel1Item(e: egret.Event): void {

			if (this.uiState != GameData.menuState) {
				this.changeLevel2UI();
			}

			this.dispatchEventWith(GameData.EVT_LEVEL1_ITEM_CHANGE, false, {}, false);
		}

		private changeLevel2UI(): void {
			if (this.baseUI) {
				this.removeChild(this.baseUI);
			}

			this.uiState = GameData.menuState;

			switch (GameData.menuState) {
				case 0: this.baseUI = new pet.PetLevel2UI(); break;
				case 1: this.baseUI = new pet.ShopLevel2UI(); break;
			}
			this.baseUI.module = this.module;
			this.addChild(this.baseUI);
		}

	}
}