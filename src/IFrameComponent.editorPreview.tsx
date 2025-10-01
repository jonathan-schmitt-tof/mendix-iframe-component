import { createElement, ReactElement } from "react";
import { IFrameComponentPreviewProps } from "../typings/IFrameComponentProps";

declare function require(name: string): string;

export const preview = (_props: IFrameComponentPreviewProps): ReactElement => {
    return <div />;
};

export function getPreviewCss(): string {
    return require("./ui/IFrameComponent.scss");
}
