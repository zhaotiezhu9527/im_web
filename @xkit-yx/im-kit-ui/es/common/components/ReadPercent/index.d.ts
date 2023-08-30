import React from 'react';
export interface ReadPercentProps {
    unread: number;
    read: number;
    hoverable?: boolean;
    radius?: number;
    prefix?: string;
}
export declare const ReadPercent: React.FC<ReadPercentProps>;
