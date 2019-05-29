module pet {
	export class WorldModule extends eui.Component {
		public scene: pet.GameSceneView;
		public timer: egret.Timer;

		public constructor() {
			super();
		}

		public createChildren(): void {
			super.createChildren();

			this.timer = new egret.Timer(1000, 0);
			this.timer.addEventListener(egret.TimerEvent.TIMER, this.onUpdate, this);
		}

		public childrenCreated() {
			super.childrenCreated();

			this.timer.start();
		}

		public onUpdate(e: egret.TimerEvent) {
			console.log("onUpdate");
		}
	}
}