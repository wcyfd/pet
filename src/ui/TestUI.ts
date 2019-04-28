namespace pet {
	export class TestUI extends eui.Component {
		public tabBar: eui.TabBar;

		public constructor() {
			super();
		}

		protected childrenCreate(): void {
			super.childrenCreated();
		}

		protected createChildren(): void {
			super.createChildren();
			// 	var exml = `
			// <e:Skin xmlns:e="http://ns.egret.com/eui" states="up,down" height="50"> 
			//     <e:Label text="{data}" textColor.down="0xFFFFFF" textColor.up="0x666666" horizontalCenter="0" verticalCenter="0"/> 
			// </e:Skin>`;
			// 	var tabBar = new eui.TabBar();
			// 	tabBar.dataProvider = new eui.ArrayCollection(["tab1", "tab2", "tab3"]);
			// 	tabBar.itemRendererSkinName = exml;
			// 	this.addChild(tabBar);
			this.tabBar.dataProvider = new eui.ArrayCollection(["tab1", "tab2", "tab3"]);
			this.tabBar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
		}

		private onBarItemTap(e: eui.ItemTapEvent): void {
			console.log(e.itemIndex);
		}
	}
}