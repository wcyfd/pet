namespace pet {
	export class AttributeUI extends pet.BaseUI {
		public weight: eui.Label;
		public age: eui.Label;
		public nickName: eui.Label;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

			this.module.addEventListener(GameData.EVT_SWITCH_PET, this.onSwitchPet, this);
		}

		protected partAdd(partName: string, instance: any): void {
			super.partAdded(partName, instance);

		}

		public onSwitchPet(evt: egret.Event): void {
			let animal: Animal = GameData.animals[GameData.currentPetIndex];

			this.weight.text = animal.weight + "";
			this.age.text = animal.age + "";
			this.nickName.text = animal.name;
		}
	}

}
