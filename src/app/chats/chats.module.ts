import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsContainer } from './chats.container';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CHATS_ROUTES } from './chats.routes';
import { ZchatChatsListHeaderNewChatModule } from './zchat-chats-list-header-new-chat/zchat-chats-list-header-new-chat.module';
import { ZchatChatsListHeaderMenuModule } from './zchat-chats-list-header-menu/zchat-chats-list-header-menu.module';
import { ZchatChatBoxComponent } from './zchat-chat-box/zchat-chat-box.component';
import { ZchatChatHeaderComponent } from './zchat-chat-header/zchat-chat-header.component';
import { ZchatListItemModule } from '../shared/components/zchat-list-item/zchat-list-item.module';
import { ZchatMainInputModule } from '../shared/components/zchat-main-input/zchat-main-input.module';
import { ZchatListModule } from '../shared/components/zchat-list/zchat-list.module';
import { ZchatButtonModule } from '../shared/components/zchat-button/zchat-button.module';

@NgModule({
  declarations: [
    ChatsContainer,
    ZchatChatBoxComponent,
    ZchatChatHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CHATS_ROUTES),
    ZchatChatsListHeaderNewChatModule,
    ZchatChatsListHeaderMenuModule,
    ZchatListItemModule,
    ZchatMainInputModule, 
    ZchatListModule,
    ZchatButtonModule
  ],
  exports: [
    RouterModule, ChatsContainer
  ]
})
export class ChatsModule { }
