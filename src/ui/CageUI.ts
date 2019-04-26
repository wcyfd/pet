module pet {
	export class CageUI extends pet.BaseUI {
		public petList: eui.List;


		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		protected childrenCreated(): void {
			super.childrenCreated();

			this.module.addEventListener(GameData.EVT_CHANGE_PET, this.onUpdateView, this);
			this.petList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChange, this);

			this.petList.dataProvider = GameData.petList;
			this.petList.selectedIndex = 0;
		}

		public onUpdateView(evt: egret.Event): void {

		}

		private onChange(e: eui.PropertyEvent): void {
			//获取点击消息
			this.dispatchEventWith(GameData.EVT_CHANGE_PET, false, { selectedIndex: this.petList.selectedIndex }, false);
		}

	}
}