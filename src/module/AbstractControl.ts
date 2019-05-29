module pet {
	export class AbstractControl extends eui.Component {
		public ui: pet.Level2ChildUI;
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
	}
}