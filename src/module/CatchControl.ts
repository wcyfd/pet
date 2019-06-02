module pet {
	export class CatchControl extends pet.AbstractControl {
		private animalType: string;
		public constructor() {
			super();
		}

		public createChildren() {
			super.createChildren();

			this.registButton("catch", this.onCatch, this);
		}

		public removeChildren() {
			super.removeChildren();
		}

		public onCatch(e: egret.TouchEvent) {
			console.log("catch");

			let targetIndex = this.getList().selectedIndex;
			if (targetIndex == -1) {
				return;
			}


			let animal = GameData.removeItemAt(this.animalType, targetIndex);
			GameData.addItem("tameAnimal", animal, "name");

		}

		public onClickItem1(): void {
			super.onClickItem1();

			let area = GameData.entityList["area"].getItemAt(GameData.level1State);
			this.animalType = area.relateAnimal;
			this.getList().dataProvider = GameData.layer1NameList[area.relateAnimal];
			this.getList().selectedIndex = -1;
			// GameData.entityList[area.relateAnimal];
		}
	}
}