module pet {
	export class AbstractControl extends eui.Component {
		public ui: pet.AreaLevel2UI;
		public constructor() {
			super();
		}

		public getButton(name: string): eui.Button {
			return this.ui.buttons.getChildByName(name) as eui.Button;
		}

		public getLabel(name: string): eui.Label {
			return this.ui.labels.getChildByName(name) as eui.Label;
		}
	}
}