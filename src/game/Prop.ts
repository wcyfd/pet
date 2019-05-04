module pet {
	export class Prop {
		public proto: PropProto;

		public static createProp(propId: number): pet.Prop {
			let prop = new pet.Prop();
			prop.proto = pet.ProtoManager.propProtos[propId];
			return prop;
		}

		public constructor() {

		}
	}
}