module pet {
	export class PetModule extends eui.Component {
		public attriubteUI: pet.AttributeUI;
		public cageUI: pet.CageUI;
		public constructor() {
			super();
		}

		protected childrenCreated(): void {
			super.childrenCreated();

			this.addEventListener(GameData.EVT_CHANGE_PET, this.attriubteUI.onChangePet, this.attriubteUI);
			this.addEventListener(GameData.EVT_CHANGE_PET, this.cageUI.onChangePet, this.cageUI);
		}


		public selectPet(index: number): void {
			GameData.currentPetIndex = index;
			this.dispatchEvent(new egret.Event(GameData.EVT_CHANGE_PET, false, false));
		}
	}


}