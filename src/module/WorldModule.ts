module pet {
	export class WorldModule extends eui.Component {
		public scene: pet.GameSceneView;
		public timer: egret.Timer;

		public constructor() {
			super();
		}

		private tameAdd(): void {
			let tameAnimals = GameData.entityList["tameAnimal"];
			for (let i = 0, len = tameAnimals.length; i < len; i++) {
				let animal = tameAnimals.getItemAt(i);
				if (animal.tame < 100) {
					animal.tame++;
				}
			}
		}

		private breed(areaName?: string): void {
			if (!areaName) {
				this.breed("cityAnimal");
				this.breed("desertAnimal");
				this.breed("forestAnimal");
				this.breed("hotAnimal");
				this.breed("tameAnimal");
				return;
			}

			let animals = GameData.entityList[areaName];
			//公动物
			let maleAnimals: { [key: string]: Array<{}> } = {};
			//母动物
			let femaleAnimals: { [key: string]: Array<{}> } = {};

			for (let i = 0; i < animals.length; i++) {
				let animal = animals.getItemAt(i);
				let name = animal.name as string;
				name = name.split(" ")[0];
				let sexAnimal = null;
				if (animal.sex == "公") {
					sexAnimal = maleAnimals;
				} else if (animal.sex == "母") {
					sexAnimal = femaleAnimals;
				}

				if (sexAnimal) {
					//动物分类
					if (!sexAnimal[name]) {
						sexAnimal[name] = [];
					}
					sexAnimal[name].push(animal);
				}
			}

			for (let name in maleAnimals) {
				if (femaleAnimals[name]) {
					let maleArray = maleAnimals[name];
					let femaleArray = femaleAnimals[name];

					for (let maleAnimal of maleArray) {
						if (MathUtil.randomBoolean) {

							if (femaleArray.length > 0) {
								let femaleAnimal = femaleArray.splice(MathUtil.randomContainMin(0, femaleArray.length), 1)[0];

								this.onBreed(areaName, name, maleAnimal, femaleAnimal);

							}
						}

					}
				}
			}


		}

		private onBreed(areaName: string, name: string, male: {}, female: {}) {
			let sex = MathUtil.randomBoolean() ? "公" : "母";

			let animal = {};
			name = sex + name.substr(1, name.length - 1);
			animal["age"] = 1;
			animal["weight"] = MathUtil.randomContainMinMax(1, 10);
			animal["name"] = name;
			animal["hp"] = 100;
			animal["tame"] = 0;
			animal["sex"] = name;

			GameData.addItem("areaName", animal, "name");


			// "age": 100,
			// "weight": 96,
			// "name": "母鼠",
			// "hp": 100,
			// "tame": 0,
			// "sex": "母"
		}

		public createChildren(): void {
			super.createChildren();

			this.timer = new egret.Timer(10000, 0);
			this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
		}

		public childrenCreated() {
			super.childrenCreated();

			this.timer.start();
		}

		public onUpdate(e: egret.TimerEvent) {
			this.tameAdd();
			this.breed();

		}
	}
}