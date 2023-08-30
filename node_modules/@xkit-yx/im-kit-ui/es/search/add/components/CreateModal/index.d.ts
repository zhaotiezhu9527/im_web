import React from 'react';
export interface CreateModalProps {
    visible: boolean;
    onChat: (teamId: string) => void;
    onCancel: () => void;
    prefix?: string;
    commonPrefix?: string;
}
declare const CreateModal: React.FC<CreateModalProps>;
export default CreateModal;
