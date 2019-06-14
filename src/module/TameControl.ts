module pet {
	export class TameControl extends pet.AbstractControl {
		private animalIndex: number;

		public constructor() {
			super();
		}

		public createChildren() {
			super.createChildren();

			this.registButton("feed", this.onFeed, this);
			this.registButton("play", this.onPlay, this);
			this.registButton("cure", this.onCure, this);
			this.registButton("rename", this.onRename, this);
		}

		private onCure(e: egret.TouchEvent) {
			console.log("onCure");

			let animal = GameData.entityList["tameAnimal"].getItemAt(this.animalIndex);
			let value = MathUtil.randomContainMinMax(0, 10);
			animal.hp += value;
			if (animal.hp > 100) {
				animal.hp = 100;
			}

			this.refreshList();
		}

		private onFeed(e: egret.TouchEvent) {
			console.log("onFeed");

			let animal = GameData.entityList["tameAnimal"].getItemAt(this.animalIndex);
			animal.tame += MathUtil.randomContainMinMax(1, 10);
			animal.weight += MathUtil.randomContainMinMax(5, 10);

			this.refreshList();
		}

		private onPlay(e: egret.TouchEvent) {
			console.log("onPlay");

			let animal = GameData.entityList["tameAnimal"].getItemAt(this.animalIndex);
			animal.tame += MathUtil.randomContainMinMax(1, 10);
			animal.weight -= MathUtil.randomContainMinMax(1, 5);

			this.refreshList();
		}

		public onRename(e: egret.TouchEvent) {
			console.log("rename");

			let animal = GameData.entityList["tameAnimal"].getItemAt(this.animalIndex);
			let name = animal.name as string;
			let index = name.indexOf(" ");
			if (index > 0) {
				name = name.split(" ")[0];
			}

			name += " ";
			let source = "abcedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			for (let i = 0; i < 5; i++) {
				let randomIndex = MathUtil.randomContainMinMax(0, source.length - 1);
				name += source.substr(randomIndex, 1);
			}
			animal.name = name;

			GameData.layer1NameList["tameAnimal"].replaceItemAt(name, this.animalIndex);

			this.refreshList();
		}

		public removeChildren() {
			super.removeChildren();
		}

		public onClickItem1(): void {
			super.onClickItem1();

			this.animalIndex = GameData.level1State;
		}
	}
}