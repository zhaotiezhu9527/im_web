import React from 'react';
import { PanelScene } from '../../Container';
export interface AddItemProps {
    scene: PanelScene;
    icon: string;
    content: string;
    onClick: (scene: PanelScene) => void;
    prefix: string;
}
declare const AddItem: React.FC<AddItemProps>;
export default AddItem;
