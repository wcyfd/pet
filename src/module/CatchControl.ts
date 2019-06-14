module pet {
	export class CatchControl extends pet.AbstractControl {
		private animalType: string;
		public constructor() {
			super();
		}

		public createChildren() {
			super.createChildren();

			this.registButton("catch", this.onCatch, this);
			this.registButton("cure", this.onCatchCure, this);
			this.registButton("attack", this.onAttack, this);
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

			let animal = GameData.entityList[this.animalType].getItemAt(targetIndex);
			//几率抓捕
			if (MathUtil.randomBoolean()) {
				let a = GameData.removeItemAt(this.animalType, targetIndex);
				GameData.addItem("tameAnimal", a, "name");
				this.getList().selectedIndex = -1;
			} else {

			}

			//几率掉血
			if (MathUtil.randomBoolean()) {
				let randomValue = MathUtil.randomContainMinMax(0, 20);
				animal.hp += -randomValue;
			} else {

			}

		}

		/**
		 * 抓捕时的救治
		 */
		public onCatchCure(e: egret.TouchEvent) {
			console.log("catchCure");

			let targetIndex = this.getList().selectedIndex;
			if (targetIndex == -1) {
				return;
			}

			let animal = GameData.entityList[this.animalType].getItemAt(targetIndex);

			//几率治疗
			if (MathUtil.randomBoolean()) {
				//治疗成功
				let randomValue = MathUtil.randomContainMinMax(0, 5);
				animal.hp += randomValue;
				if (animal.hp > 100) {
					animal.hp = 100;
				}
			} else {

			}
		}

		public onAttack(e: egret.TouchEvent) {
			console.log("attack");

			let targetIndex = this.getList().selectedIndex;
			if (targetIndex == -1) {
				return;
			}

			let animal = GameData.entityList[this.animalType].getItemAt(targetIndex);

			//几率攻击
			if (MathUtil.randomBoolean()) {
				//攻击成功
				let randomValue = MathUtil.randomContainMinMax(0, 30);
				animal.hp -= randomValue;
				if (animal.hp < 0) {
					animal.hp = 0;
				}
			} else {

			}
		}

		public onClickItem1(): void {
			super.onClickItem1();

			let area = GameData.entityList["area"].getItemAt(GameData.level1State);
			this.animalType = area.relateAnimal;
			this.getList().dataProvider = GameData.layer1NameList[area.relateAnimal];
			this.getList().selectedIndex = -1;
		}
	}
}