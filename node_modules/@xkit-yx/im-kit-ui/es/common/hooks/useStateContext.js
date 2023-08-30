import { useContext } from 'react';
import { Context } from '../contextManager/Provider';
export var useStateContext = function () {
    var _a = useContext(Context), store = _a.store, nim = _a.nim, initOptions = _a.initOptions, localOptions = _a.localOptions;
    if (!nim || !store || !initOptions || !localOptions) {
        throw new Error('Please use Provider to wrap UI Kit.');
    }
    return { nim: nim, store: store, initOptions: initOptions, localOptions: localOptions };
};
