module pet {
	export class CatchControl extends pet.AbstractControl {
		private catch: eui.Button;
		private targetIndex: number;
		private animalType: string;
		public constructor() {
			super();

			this.targetIndex = -1;
		}

		public createChildren() {
			super.createChildren();

			this.catch = this.getButton("catch");
			this.catch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCatch, this);
			this.getList().addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onListItem, this);
		}

		public removeChildren() {
			super.removeChildren();
			this.catch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCatch, this);
		}

		public onCatch(e: egret.TouchEvent) {
			console.log("catch");

			if (this.targetIndex == -1) {
				return;
			}

			if (true) {
				let index = this.targetIndex;
				this.targetIndex = -1;
				let animal = GameData.removeItemAt(this.animalType, index);
				GameData.addItem("tameAnimal", animal, "name");
			}
		}

		public onListItem(e: eui.ItemTapEvent) {
			this.targetIndex = this.getList().selectedIndex;
		}

		public onClickItem1(): void {
			super.onClickItem1();

			let area = GameData.entityList["area"].getItemAt(GameData.level1State);
			this.animalType = area.relateAnimal;
			this.getList().dataProvider = GameData.layer1NameList[area.relateAnimal];
			this.getList().selectedIndex = this.targetIndex = -1;
			// GameData.entityList[area.relateAnimal];
		}
	}
}