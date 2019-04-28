module pet {
	export class WorldUI extends pet.BaseUI {
		public infoList: eui.List;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

		}

		protected childrenCreated(): void {
			super.childrenCreated();

			this.infoList.dataProvider = GameData.infoLists[0];
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
	}
}