namespace pet {
	/**
	 * 场景切换容器
	 */
	export class GameSceneView extends eui.Component {
		public worldUI: pet.WorldUI;
		public menuUI: pet.MenuUI;
		public level1UI: pet.Level1UI;
		public level2UI: pet.Level2UI;
		public save: eui.Button;
		public read: eui.Button;

		public worldModule: pet.WorldModule;
		public petModule: pet.PetModule;

		public constructor() {
			super();

			this.worldModule = new pet.WorldModule();
			this.petModule = new pet.PetModule();
		}


		private saveRecord(e: egret.Event): void {
			egret.localStorage.setItem("test", "test1");
			egret.log("save record");
		}

		private loadRecord(e: egret.Event): void {
			let value = egret.localStorage.getItem("test");
			egret.log("read record=" + value);
			this.read.label = value;
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


			this.petModule.scene = this;
			this.addChild(this.petModule);

			this.worldModule.scene = this;
			this.addChild(this.worldModule);


			this.save.addEventListener(egret.TouchEvent.TOUCH_TAP, this.saveRecord, this);
			this.read.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loadRecord, this);
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
			console.log("gamesceneview partAdded");

			if (partName.indexOf("UI") != -1) {
				let baseUI = instance as pet.BaseUI;
				baseUI.module = this.petModule;

				console.info(partName + " bind module");
			}
		}

		protected childrenCreated(): void {
			super.childrenCreated();
		}

	}

}