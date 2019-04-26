module pet {
	export class BaseUI extends eui.Component {
		module: pet.PetModule;
		public constructor() {
			super();
			this.module = null;
		}

		public onUpdateView(evt: egret.Event): void {

		}
	}
}