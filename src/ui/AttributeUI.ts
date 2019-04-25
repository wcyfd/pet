namespace pet {
	export class AttributeUI extends eui.Component {
		public weight: eui.Label;
		public age: eui.Label;

		public constructor() {
			super();
		}

		protected partAdd(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
	}

}
