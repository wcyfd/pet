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
			this.module.addEventListener(GameData.SC_EVT_CLICK_LEVEL1_ITEM, this.onClickLevel1Item, this);
		}

		public removeChildren(): void {
			super.removeChildren();
			console.info("level2UI remove");
		}

		/**
		 * 点击了第一层
		 */
		public onClickLevel1Item(e: egret.Event): void {
			console.log(egret.getQualifiedClassName(this) + `,uiState=${this.uiState},menuState=${GameData.menuState}`);
			if (this.uiState != GameData.menuState) {
				this.changeLevel2UI();
			}

			this.dispatchEventWith(GameData.CS_EVT_LEVEL1_ITEM_CHANGE, false, {}, false);
		}

		private changeLevel2UI(): void {

			if (this.baseUI) {
				console.log(egret.getQualifiedClassName(this) + `,removeChild ${egret.getQualifiedClassName(this.baseUI)}`);
				this.baseUI.removeChildren();//不利用exml添加的组件不会调用removeChildren();
				this.removeChild(this.baseUI);
				this.baseUI = null;
			}

			this.baseUI = new Level2ChildUI();
			this.baseUI.module = this.module;
			this.addChild(this.baseUI);
			this.uiState = GameData.menuState;
		}

	}
}