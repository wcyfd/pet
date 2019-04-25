namespace pet {
	/**
	 * 场景切换容器
	 */
	export class GameSceneView extends eui.Component {
		public attributeUI: pet.AttributeUI;
		public menuUI: pet.MenuUI;
		public worldUI: pet.WorldUI;


		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();

			let back = new egret.Sprite();
			this.addChild(back);
			this.setChildIndex(back, 0);
			back.width = GameData.width;
			back.height = GameData.height;
			back.graphics.beginFill(0xFFFFFF);
			back.graphics.drawRect(0, 0, GameData.width, GameData.height);
			back.graphics.endFill();
		}

		protected childrenCreated(): void {
			super.childrenCreated();

		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
			console.log(partName);
		}
	}

}