import SockJS from 'sockjs-client';

import Product from '@Types/Product';

export interface costProps {
    item?: Product, 
    stompClient?: SockJS, 
    chatId?: string,
    sheetId?: string
}