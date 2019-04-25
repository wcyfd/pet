class GameData {
	public static initGameData(layer: eui.UILayer) {
		console.log("游戏数据初始化");
		GameData.width = layer.stage.stageWidth;
		GameData.height = layer.stage.stageHeight;
		console.log(`宽度 ${GameData.width}, 高度 ${GameData.height}`);

		for (let i = 0; i < GameData.petList.length; i++) {
			GameData.infoLists[0] = new eui.ArrayCollection(["something"]);
		}
	}
	public static width: number = 0;
	public static height: number = 0;

	public static petList: eui.ArrayCollection = new eui.ArrayCollection(["pet1", "pet2"]);
	public static infoLists: eui.ArrayCollection[] = [];
}