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

		let menuJSONArray = RES.getRes("menu_json") as Array<any>;
		menuJSONArray.forEach(menu => {
			GameData.menuNames.addItem(menu.name);
			GameData.menuItemList.addItem(menu);
		});

		let game_init = RES.getRes("game_init_json");
		let array = game_init.entity as Array<string>;
		for (let file of array) {
			GameData.loadEntity(file);
		}

	}

	private static loadEntity(config_name: string): void {
		let configJSONObject = RES.getRes(config_name);
		//实例化
		let collection1 = new eui.ArrayCollection();
		let collection2 = new eui.ArrayCollection();
		GameData.layer1NameList[configJSONObject.tag] = collection1;
		GameData.entityList[configJSONObject.tag] = collection2;
		GameData.commentList[configJSONObject.tag] = configJSONObject.comment;


		let count = configJSONObject.count as number;
		//根据规范新建
		for (let i = 0; i < count; i++) {
			let obj = {};
			for (let key in configJSONObject.proto) {
				let value = configJSONObject.proto[key];
				value += i;
				obj[key] = value;
			}

			collection1.addItem(obj[configJSONObject.layer1]);
			collection2.addItem(obj);
		}

		//枚举样板放入
		if (configJSONObject.enum) {
			let entityArray = configJSONObject.enum as Array<any>;

			entityArray.forEach(entityJSONObject => {
				collection1.addItem(entityJSONObject[configJSONObject.layer1]);
				collection2.addItem(entityJSONObject);
			});
		}
	}

	public static convertToCollection(name: string): eui.ArrayCollection {
		let obj = GameData.entityList[name].getItemAt(GameData.level1State);
		let c = new eui.ArrayCollection();
		for (let a in obj) {
			let kv = {};
			kv["key"] = GameData.commentList[name][a];
			kv["value"] = obj[a];
			c.addItem(kv);
		}

		return c;
	}


	public static convertToCollection2(name: string): eui.ArrayCollection {
		let obj = GameData.entityList[name].getItemAt(GameData.level1State);
		let c = new eui.ArrayCollection();
		for (let a in obj) {
			c.addItem(obj["name"]);
		}

		return c;
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
	public static menuNames: eui.ArrayCollection = new eui.ArrayCollection();
	public static menuItemList: eui.ArrayCollection = new eui.ArrayCollection();

	//世界信息
	public static infoLists: eui.ArrayCollection[] = [];

	//第一级内容，用于展示标签
	public static level1Data: eui.ArrayCollection = new eui.ArrayCollection();
	public static petNameList: eui.ArrayCollection = new eui.ArrayCollection();
	public static shopNameList: eui.ArrayCollection = new eui.ArrayCollection();
	public static propNameList: eui.ArrayCollection = new eui.ArrayCollection();

	public static layer1NameList: { [key: string]: eui.ArrayCollection } = {};

	//第二及内容，内容是实体
	public static level2Data: eui.ArrayCollection = new eui.ArrayCollection();
	public static animals: eui.ArrayCollection = new eui.ArrayCollection();
	public static shops: eui.ArrayCollection = new eui.ArrayCollection();
	public static props: eui.ArrayCollection = new eui.ArrayCollection();

	public static entityList: { [key: string]: eui.ArrayCollection } = {};

	public static commentList: { [key: string]: {} } = {};

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