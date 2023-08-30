var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { FriendSelectUI } from './FriendSelectUI';
import { useStateContext } from '../../hooks/useStateContext';
import { observer } from 'mobx-react';
export var FriendSelectContainer = observer(function (props) {
    var store = useStateContext().store;
    // const [loading, setLoading] = useState(false)
    // useEffect(() => {
    //   setLoading(true)
    //   store.uiStore
    //     .getFriendsWithoutBlacklist()
    //     .then(() => {
    //       setLoading(false)
    //     })
    //     .catch(() => {
    //       setLoading(false)
    //     })
    // }, [store.uiStore])
    return (React.createElement(FriendSelectUI, __assign({ list: store.uiStore.friendsWithoutBlacklist }, props)));
});
