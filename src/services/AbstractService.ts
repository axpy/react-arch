import {BinaryResult as BR} from '../models/Common';

export class AbstractService {
	result<T>(success: boolean, payload?: T) {
		return new BR<T>(success, payload);
	}
}