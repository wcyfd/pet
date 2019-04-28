class GameData {
	public static initGameData(layer: eui.UILayer) {
		console.log("游戏数据初始化");
		GameData.width = layer.stage.stageWidth;
		GameData.height = layer.stage.stageHeight;
		console.log(`宽度 ${GameData.width}, 高度 ${GameData.height}`);

		for (let i = 0; i < GameData.petList.length; i++) {
			GameData.infoLists[0] = new eui.ArrayCollection(["something"]);
		}

		for (let i = 0; i < 10; i++) {
			let a = new pet.Animal();
			a.name = "name" + i;
			a.age = 12;
			a.weight = 10;
			GameData.animals.push(a);
			GameData.petList.addItem(a.name);
		}

		GameData.menuItemList.addItem('商店');
		GameData.menuItemList.addItem('宠物');
		GameData.menuItemList.addItem('区域');

		GameData.shopItemList.addItem('笼子');
		GameData.shopItemList.addItem('粮');
		GameData.shopItemList.addItem('窝');

		GameData.firstLayer.addItem(GameData.shopItemList);
		GameData.firstLayer.addItem(GameData.petList);
		GameData.firstLayer.addItem(GameData.areaList);
	}
	public static width: number = 0;
	public static height: number = 0;

	public static currentPetIndex: number = 0;
	public static menuItemList: eui.ArrayCollection = new eui.ArrayCollection();

	public static petList: eui.ArrayCollection = new eui.ArrayCollection();
	public static shopItemList: eui.ArrayCollection = new eui.ArrayCollection();
	public static areaList: eui.ArrayCollection = new eui.ArrayCollection();

	public static infoLists: eui.ArrayCollection[] = [];
	public static animals: pet.Animal[] = [];
	public static firstLayer: eui.ArrayCollection = new eui.ArrayCollection();

	public static EVT_SWITCH_PET: string = "switch_pet";
	public static EVT_CHOOSE_MENU_ITEM: string = "change_first_list";
}