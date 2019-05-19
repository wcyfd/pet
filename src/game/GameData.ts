class GameData {
	public static initGameData(layer: eui.UILayer) {
		console.log("游戏数据初始化");
		GameData.width = layer.stage.stageWidth;
		GameData.height = layer.stage.stageHeight;
		console.log(`宽度 ${GameData.width}, 高度 ${GameData.height}`);

		for (let i = 0; i < GameData.petNameList.length; i++) {
			GameData.infoLists[0] = new eui.ArrayCollection(["something"]);
		}


		GameData.initProto();

		GameData.menuItemList.addItem('宠物');
		GameData.menuItemList.addItem('商店');
		GameData.menuItemList.addItem('背包');
		GameData.menuItemList.addItem('繁殖');

		for (let i = 0; i < 10; i++) {
			let a = new pet.Animal();
			a.name = "name" + i;
			a.age = 12 + i;
			a.weight = 10 + i;
			GameData.animals.addItem(a);
			GameData.petNameList.addItem(a.name);
		}

		for (let i = 1; i <= 3; i++) {
			let s = pet.ShopItem.createShopItem(i);
			GameData.shops.addItem(s);
			GameData.shopNameList.addItem(s.proto.name);
		}


		GameData.level1Data.addItem(GameData.petNameList);
		GameData.level1Data.addItem(GameData.shopNameList);
		GameData.level1Data.addItem(GameData.propNameList);

		GameData.level2Data.addItem(GameData.animals);
		GameData.level2Data.addItem(GameData.shops);
		GameData.level2Data.addItem(GameData.props);


	}



	private static initProto(): void {

		let createPropProto = (name: string, price: number, id: number, context: string): pet.PropProto => {
			let proto = new pet.PropProto();
			proto.id = id;
			proto.name = name;
			proto.price = price;
			proto.context = context;
			pet.ProtoManager.propProtos[proto.id] = proto;
			proto.init();
			return proto;
		}
		for (let i = 1; i <= 10; i++) {
			createPropProto("道具" + i, 10 + i, i, "context" + i);
		}
	}
	public static width: number = 0;
	public static height: number = 0;

	public static currentPetIndex: number = 0;
	//菜单
	public static menuItemList: eui.ArrayCollection = new eui.ArrayCollection();

	//世界信息
	public static infoLists: eui.ArrayCollection[] = [];

	//第一级内容，用于展示标签
	public static level1Data: eui.ArrayCollection = new eui.ArrayCollection();
	public static petNameList: eui.ArrayCollection = new eui.ArrayCollection();
	public static shopNameList: eui.ArrayCollection = new eui.ArrayCollection();
	public static propNameList: eui.ArrayCollection = new eui.ArrayCollection();

	//第二及内容，内容是实体
	public static level2Data: eui.ArrayCollection = new eui.ArrayCollection();
	public static animals: eui.ArrayCollection = new eui.ArrayCollection();
	public static shops: eui.ArrayCollection = new eui.ArrayCollection();
	public static props: eui.ArrayCollection = new eui.ArrayCollection();

	//状态标识
	public static menuState: number = 0;
	public static level1State: number = 0;
	public static level2State: number = 0;

	public static CS_EVT_CLICK_LEVEL1_ITEM: string = "cs_switch_pet";
	public static SC_EVT_CLICK_LEVEL1_ITEM: string = "sc_switch_pet";
	public static CS_EVT_CHOOSE_MENU_ITEM: string = "cs_change_first_list";
	public static SC_EVT_CHOOSE_MENU_ITEM: string = "sc_change_first_list";
	public static CS_EVT_LEVEL1_ITEM_CHANGE: string = "cs_level1_item_change";
	public static SC_EVT_LEVEL1_ITEM_CHANGE: string = "sc_level1_item_change";
}