import {registerSheet} from 'react-native-actions-sheet';
import { ActionSheetProps } from './ActionSheetTypes';

export default function RegisterSheet({name, sheet} : ActionSheetProps) : void{
    registerSheet(name ?? "", sheet);
}

 