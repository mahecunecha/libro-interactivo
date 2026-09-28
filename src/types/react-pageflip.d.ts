declare module 'react-pageflip' {
    import * as React from 'react';

    export interface IFlipSetting {
        width: number;
        height: number;
        size?: 'fixed' | 'stretch';
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        drawShadow?: boolean;
        flippingTime?: number;
        usePortrait?: boolean;
        startZIndex?: number;
        autoSize?: boolean;
        maxShadowOpacity?: number;
        showCover?: boolean;
        mobileScrollSupport?: boolean;
        swipeDistance?: number;
        clickEventForward?: boolean;
        useMouseEvents?: boolean;
        renderOnlyPageLengthChange?: boolean;
        className?: string;
        style?: React.CSSProperties;
        children?: React.ReactNode;
        onFlip?: (e: { data: number }) => void;
        onChangeOrientation?: (e: { data: 'portrait' | 'landscape' }) => void;
        onChangeState?: (e: { data: string }) => void;
    }

    const HTMLFlipBook: React.ForwardRefExoticComponent<
        IFlipSetting & React.RefAttributes<any>
    >;

    export default HTMLFlipBook;
}