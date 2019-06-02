module pet {
	export class AbstractControl extends eui.Component {
		public ui: pet.Level2ChildUI;

		private buttonListeners = [];
		public constructor() {
			super();
		}

		public getButton(name: string): eui.Button {
			return this.ui.buttons.getChildByName(name) as eui.Button;
		}

		public getLabel(name: string): eui.Label {
			return this.ui.labels.getChildByName(name) as eui.Label;
		}

		public getList(): eui.List {
			return this.ui.entities;
		}

		public onClickItem1(): void {

		}


		protected registButton(name: string, listener: (this: this, e: egret.TouchEvent) => void, obj: any, type?: string): void {
			let button = this.getButton(name);
			if (button) {

				type = type ? type : egret.TouchEvent.TOUCH_TAP;
				button.addEventListener(type, listener, obj);

				let target = {};
				target["target"] = button;
				target["type"] = type;
				target["listener"] = listener;
				target["obj"] = obj;
				this.buttonListeners.push(target);
			}
		}

		private unregistButtons() {
			for (let target of this.buttonListeners) {
				let button = target["target"] as eui.Button;
				let type = target["type"] as string;
				let listener = target["listener"];
				let obj = target["obj"];

				button.removeEventListener(type, listener, obj);
				console.log("是否有监听" + button.hasEventListener(type));
			}
		}

		public removeChildren(): void {
			super.removeChildren();

			this.unregistButtons();
		}



	}
}