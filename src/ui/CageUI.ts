module pet {
	export class CageUI extends eui.Component {
		public petList: eui.List;


		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

		}

		protected childrenCreated(): void {
			super.childrenCreated();

			this.petList.dataProvider = GameData.petList;
			this.petList.selectedIndex = 0;
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		public onChangePet(evt: egret.Event): void {
			this.petList.selectedIndex = GameData.currentPetIndex;
		}
	}
}