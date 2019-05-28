module pet {
	export class AreaControl extends pet.AbstractControl {
		public button: eui.Button;
		public constructor() {
			super();
		}

		public createChildren() {
			super.createChildren();

			this.button = this.getButton("b1");
			this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this);
		}

		public childrenCreated() {
			super.childrenCreated();

			console.log("area control childrenCreated");
		}

		public removeChildren() {
			super.removeChildren();
			this.button.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this);
		}

		public onButton(e: egret.TouchEvent) {
			console.log("test click ======================");
		}
	}
}