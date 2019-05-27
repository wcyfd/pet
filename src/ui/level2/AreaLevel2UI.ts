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

			this.entities.itemRendererSkinName = KeyValueItemUISkin;
			this.entities.dataProvider = GameData.convertToCollection("area");

			for (let i = 0; i < 10; i++) {
				let label = new eui.Label();
				label.textColor = 0x000000;
				label.text = "label" + i;
				this.labels.addChild(label);
			}

			for (let i = 0; i < 10; i++) {
				let button = new eui.Button();
				button.label = "button" + i;
				this.buttons.addChild(button);
			}


			this.module.addEventListener(GameData.SC_EVT_LEVEL1_ITEM_CHANGE, this.onClickLevel1Item, this);
		}


		private onClickLevel1Item(evt: egret.Event): void {
			this.entities.dataProvider = GameData.convertToCollection("area");
		}
	}
}