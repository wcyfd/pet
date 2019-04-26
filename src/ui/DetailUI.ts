module pet {
	export class DetailUI extends pet.BaseUI {
		public attributeList: eui.List;

		public constructor() {
			super();
		}

		protected createChildren(): void {
			super.createChildren();
			this.module.addEventListener(GameData.EVT_CHANGE_PET, this.onUpdateView, this);
		}

		public childrenCreated(): void {
			super.childrenCreated();
			this.attributeList.dataProvider = new eui.ArrayCollection();
		}

		public onUpdateView(evt: egret.Event): void {
			let animal = GameData.animals[GameData.currentPetIndex];
			let collection: eui.ArrayCollection = this.attributeList.dataProvider as eui.ArrayCollection;
			collection.removeAll();
			collection.addItem(`姓名:${animal.name}`);
			collection.addItem(`年龄:${animal.age}`);
			collection.addItem(`体重:${animal.weight}`);
		}
	}
}