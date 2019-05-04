module pet {
	export class PetModule extends eui.Component {

		public scene: pet.GameSceneView;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

			this.scene.level1UI.addEventListener(GameData.EVT_CLICK_LEVEL1_ITEM, this.onClickLevel1Item, this);
			this.scene.menuUI.addEventListener(GameData.EVT_CHOOSE_MENU_ITEM, this.onChangeMenuItem, this);
			this.scene.level2UI.addEventListener(GameData.EVT_LEVEL1_ITEM_CHANGE, this.onChangeLevel1Item, this);
		}

		protected childrenCreated(): void {
			super.childrenCreated();

		}

		public onClickLevel1Item(evt: egret.Event): void {
			this.dispatchEventWith(GameData.EVT_CLICK_LEVEL1_ITEM, false, {}, false);
		}

		public onChangeMenuItem(evt: egret.Event): void {
			this.dispatchEventWith(GameData.EVT_CHOOSE_MENU_ITEM, false, {}, false);
		}

		public onChangeLevel1Item(evt: egret.Event) {
			this.dispatchEventWith(GameData.EVT_LEVEL1_ITEM_CHANGE, false, {}, false);
		}
	}


}