import { useContext } from 'react';
import { Context } from '../contextManager/Provider';
export var useTranslation = function () {
    var t = useContext(Context).t;
    if (!t) {
        throw new Error('Please use Provider to wrap UI Kit.');
    }
    return { t: t };
};
