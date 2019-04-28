module pet {
	export class PetModule extends eui.Component {

		public scene: pet.GameSceneView;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

			this.scene.cageUI.addEventListener(GameData.EVT_SWITCH_PET, this.onSwitchPet, this);
			this.scene.menuUI.addEventListener(GameData.EVT_CHOOSE_MENU_ITEM, this.onChangeMenuItem, this);
		}

		protected childrenCreated(): void {
			super.childrenCreated();

		}

		public onSwitchPet(evt: egret.Event): void {
			let index = evt.data.selectedIndex;
			GameData.currentPetIndex = index;
			this.dispatchEventWith(GameData.EVT_SWITCH_PET, false, {}, false);
		}

		public onChangeMenuItem(evt: egret.Event): void {
			let index = evt.data.index;
			this.dispatchEventWith(GameData.EVT_CHOOSE_MENU_ITEM, false, { index: index }, false);
		}
	}


}