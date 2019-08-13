import { SecureStore } from "expo";
import { sidKey } from "../../constants/storage";

export class _storage {
    _saveSessionId(sid) {
        SecureStore.setItemAsync(sidKey, sid);
    }
}
