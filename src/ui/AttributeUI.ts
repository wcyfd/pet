namespace pet {
	export class AttributeUI extends eui.Component {
		public weight: eui.Label;
		public age: eui.Label;

		public constructor() {
			super();
		}

		protected partAdd(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		public onChangePet(evt: egret.Event): void {
			let index = GameData.currentPetIndex;
			let animal: Animal = GameData.animals[index];

			this.weight.text = animal.weight + "";
			this.age.text = animal.age + "";
		}
	}

}
