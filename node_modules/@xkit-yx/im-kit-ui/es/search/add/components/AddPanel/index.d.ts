import React from 'react';
import { PanelScene } from '../../Container';
export interface AddPanelProps {
    trigger: string;
    onClick: (scene: PanelScene) => void;
    prefix?: string;
}
declare const AddPanel: React.FC<AddPanelProps>;
export default AddPanel;
