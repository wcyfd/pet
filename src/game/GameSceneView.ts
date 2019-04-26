namespace pet {
	/**
	 * 场景切换容器
	 */
	export class GameSceneView extends eui.Component {
		public attributeUI: pet.AttributeUI;
		public menuUI: pet.MenuUI;
		public worldUI: pet.WorldUI;
		public cageUI: pet.CageUI;
		public switchUI: pet.SwitchUI;


		public petModule: pet.PetModule;


		public constructor() {
			super();
			this.petModule = new pet.PetModule();
		}

		protected createChildren(): void {
			super.createChildren();

			console.log("gamesceneview createChildren");

			let back = new egret.Sprite();
			this.addChild(back);
			this.setChildIndex(back, 0);
			back.width = GameData.width;
			back.height = GameData.height;
			back.graphics.beginFill(0xFFFFFF);
			back.graphics.drawRect(0, 0, GameData.width, GameData.height);
			back.graphics.endFill();

			this.petModule.attriubteUI = this.attributeUI;
			this.petModule.cageUI = this.cageUI;
			this.petModule.menuUI = this.menuUI;
			this.petModule.worldUI = this.worldUI;
			this.petModule.switchUI = this.switchUI;
			this.addChild(this.petModule);
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
			console.log("gamesceneview partAdded");
			if (partName == "attributeUI") {
				this.attributeUI.module = this.petModule;
			}

			if (partName == "menuUI") {
				this.menuUI.module = this.petModule;
			}

			if (partName == "worldUI") {
				this.worldUI.module = this.petModule;
			}

			if (partName == "cageUI") {
				this.cageUI.module = this.petModule;
			}

			if (partName == "switchUI") {
				this.switchUI.module = this.petModule;
			}
			// console.log(partName);
		}

		protected childrenCreated(): void {
			super.childrenCreated();
			console.log("gamesceneview childrenCreated");
			this.cageUI.petList.selectedIndex = 0;
		}

	}

}