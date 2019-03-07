import {Color} from "csstype";

interface IClockState {
    time: string;
}

interface IBoxProps {
    color: Color;
}

interface IInlineEditProps {
    initialValue: string;
    onEdited(newValue: string): void;
}

interface IInlineEditState {
    isInEditMode: boolean;
    value: string;
}
