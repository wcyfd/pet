module pet {
	export class FreeControl extends pet.AbstractControl {
		private animalIndex: number;
		public constructor() {
			super();
		}

		public createChildren() {
			super.createChildren();

			this.registButton("free", this.onFree, this);
		}

		public removeChildren() {
			super.removeChildren();
		}

		public onFree(e: egret.TouchEvent): void {
			let idx = this.getList().selectedIndex;
			if (idx == -1) {
				return;
			}

			let area = GameData.entityList["area"].getItemAt(idx);
			let target = GameData.entityList["tameAnimal"].getItemAt(this.animalIndex);
			GameData.removeItemAt("tameAnimal", this.animalIndex);
			GameData.addItem(area.relateAnimal, target, "name");
		}

		public onClickItem1() {
			this.animalIndex = GameData.level1State;
		}
	}
}