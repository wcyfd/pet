module pet {
	export class PetModule extends eui.Component {

		public scene: pet.GameSceneView;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

			this.scene.cageUI.addEventListener(GameData.EVT_CHANGE_PET, this.onUIChange, this);
		}

		protected childrenCreated(): void {
			super.childrenCreated();

		}


		public onUIChange(evt: egret.Event): void {
			let index = evt.data.selectedIndex;
			GameData.currentPetIndex = index;
			this.dispatchEventWith(GameData.EVT_CHANGE_PET, false, {}, false);
		}
	}


}