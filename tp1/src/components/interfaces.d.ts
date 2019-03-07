import {Color} from "csstype";

interface IBoxProps {
    color: Color;
}

interface IInlineEdit {
    initialValue: string;
    onEdited(newValue: string): void;
}
