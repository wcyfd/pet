module pet {
	export class CatchControl extends pet.AbstractControl {
		private catch: eui.Button;
		private targetIndex: number;
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
				let menu = GameData.menuItemList.getItemAt(GameData.menuState);

				let wildAnimal = GameData.removeItemAt(menu.display.attribute, index);
				GameData.addItem("tameAnimal", wildAnimal, "name");
			} else {

			}
		}

		public onListItem(e: eui.ItemTapEvent) {
			this.targetIndex = this.getList().selectedIndex;
		}
	}
}