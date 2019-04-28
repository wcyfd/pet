module pet {
	export class CageUI extends pet.BaseUI {
		public petList: eui.List;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

			// let scroller = new eui.Scroller();
			// this.petList = new eui.List();
			// this.petList.dataProvider = GameData.petList;
			// scroller.viewport = this.petList;
			// scroller.height = 200;
			// scroller.width = 100;
			// this.addChild(scroller);


			this.module.addEventListener(GameData.EVT_SWITCH_PET, this.onSwitchPet, this);
			this.module.addEventListener(GameData.EVT_CHOOSE_MENU_ITEM, this.onChangeFirstLayer, this);
			this.petList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChange, this);

			this.petList.dataProvider = GameData.petList;
			this.petList.selectedIndex = 0;
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		protected childrenCreated(): void {
			super.childrenCreated();


		}

		public onSwitchPet(evt: egret.Event): void {

		}

		private onChange(e: eui.PropertyEvent): void {
			//获取点击消息
			this.dispatchEventWith(GameData.EVT_SWITCH_PET, false, { selectedIndex: this.petList.selectedIndex }, false);
		}

		private onChangeFirstLayer(e: egret.Event): void {
			this.petList.dataProvider = GameData.firstLayer.getItemAt(e.data.index);
		}

	}
}