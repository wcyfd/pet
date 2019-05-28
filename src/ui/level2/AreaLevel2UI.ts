module pet {
	export class AreaLevel2UI extends pet.BaseUI {

		public labels: eui.Group;
		public entities: eui.List;
		public buttons: eui.Group;

		public controlEntity: pet.AbstractControl;

		public constructor() {
			super();
		}

		public createChildren(): void {
			super.createChildren();
			let menu = GameData.menuItemList.getItemAt(GameData.menuState);
			if (menu.display) {
				if (menu.display.show) {
					this.entities.itemRendererSkinName = KeyValueItemUISkin;
				}
			}

			if (menu.labels) {
				for (let labelConfig of menu.labels) {
					let label = new eui.Label();
					label.textColor = 0x00000;
					label.text = labelConfig.text;
					label.name = labelConfig.name;

					this.labels.addChild(label);
				}
			}

			if (menu.buttons) {
				for (let buttonConfig of menu.buttons) {
					let button = new eui.Button();
					button.label = buttonConfig.label;
					button.name = buttonConfig.name;

					this.buttons.addChild(button);
				}
			}

			if (menu.control) {
				let controlClazz = egret.getDefinitionByName(menu.control);
				this.controlEntity = new controlClazz();
				this.controlEntity.ui = this;

				this.addChild(this.controlEntity);
			}

			this.module.addEventListener(GameData.SC_EVT_LEVEL1_ITEM_CHANGE, this.onClickLevel1Item, this);
		}

		public removeChildren(): void {
			super.removeChildren();
			if (this.controlEntity)
				this.controlEntity.removeChildren();

			this.module.removeEventListener(GameData.SC_EVT_LEVEL1_ITEM_CHANGE, this.onClickLevel1Item, this);
		}


		private onClickLevel1Item(evt: egret.Event): void {
			let menu = GameData.menuItemList.getItemAt(GameData.menuState);
			this.entities.dataProvider = menu.display && menu.display.show ? GameData.convertToCollection(menu.target) : GameData.convertToCollection2(menu.target);

		}
	}
}