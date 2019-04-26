module pet {
	export class SwitchUI extends pet.BaseUI {
		public tabBar: eui.TabBar;
		public detailUI: pet.DetailUI;


		public constructor() {
			super();
		}

		public createChildren(): void {
			super.createChildren();
			console.info("switchUI createChildren");
			this.module.addEventListener(GameData.EVT_CHANGE_PET, this.onUpdateView, this);
		}

		public childrenCreated(): void {
			super.childrenCreated();
			console.info("switchUI childrenCreated");
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
			console.info("switchUI partAdded")
			if (partName == "detailUI") {
				this.detailUI.module = this.module;
			}
		}

		public onTabChange(evt: eui.ItemTapEvent): void {

		}

		public onUpdateView(evt: egret.Event): void {

		}
	}
}