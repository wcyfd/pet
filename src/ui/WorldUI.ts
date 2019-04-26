module pet {
	export class WorldUI extends pet.BaseUI {
		public infoList: eui.List;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

			this.module.addEventListener(GameData.EVT_CHANGE_PET, this.onUpdateView, this);
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