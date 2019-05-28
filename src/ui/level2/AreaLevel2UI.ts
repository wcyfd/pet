module pet {
	export class AreaLevel2UI extends pet.BaseUI {

		public labels: eui.Group;
		public entities: eui.List;
		public buttons: eui.Group;

		public constructor() {
			super();
		}

		public createChildren(): void {
			super.createChildren();
			let menu = GameData.menuItemList.getItemAt(GameData.menuState);
			if (menu.display.show) {
				this.entities.itemRendererSkinName = KeyValueItemUISkin;
				this.entities.dataProvider = GameData.convertToCollection(menu.target);
			} else {
				this.entities.dataProvider = GameData.convertToCollection2(menu.target);
			}


			for (let labelConfig of menu.labels) {
				let label = new eui.Label();
				label.textColor = 0x00000;
				label.text = labelConfig.text;
				label.name = labelConfig.name;

				this.labels.addChild(label);
			}

			for (let buttonConfig of menu.buttons) {
				let button = new eui.Button();
				button.label = buttonConfig.label;
				button.name = buttonConfig.name;

				this.buttons.addChild(button);
			}


			this.module.addEventListener(GameData.SC_EVT_LEVEL1_ITEM_CHANGE, this.onClickLevel1Item, this);
		}


		private onClickLevel1Item(evt: egret.Event): void {
			let menu = GameData.menuItemList.getItemAt(GameData.menuState);
			this.entities.dataProvider = GameData.convertToCollection(menu.target);
		}
	}
}