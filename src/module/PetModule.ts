module pet {
	export class PetModule extends eui.Component {
		public attriubteUI: pet.AttributeUI;
		public cageUI: pet.CageUI;
		public worldUI: pet.WorldUI;
		public menuUI: pet.MenuUI;
		public switchUI: pet.SwitchUI;

		public constructor() {
			super();
		}

		protected childrenCreated(): void {
			super.childrenCreated();

			this.cageUI.addEventListener(GameData.EVT_CHANGE_PET, this.onUIChange, this);
		}

		public onUIChange(evt: egret.Event): void {
			let index = evt.data.selectedIndex;
			GameData.currentPetIndex = index;
			this.dispatchEventWith(GameData.EVT_CHANGE_PET, false, {}, false);
		}
	}


}