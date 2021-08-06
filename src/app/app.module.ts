import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ArchiveChatPageComponent } from './archive-chat-page/archive-chat-page.component';
import { ActiveChatPageComponent } from './active-chat-page/active-chat-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UpdateComponent } from './update/update.component';
import { BannerComponent } from './banner/banner.component';
import { SectionComponent } from './section/section.component';
import { QuestionComponent } from './question/question.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FAQComponent } from './faq/faq.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatIdComponent } from './chat-id/chat-id.component';
import { MessageComponent } from './message/message.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    OtpPageComponent,
    ChatPageComponent,
    ArchiveChatPageComponent,
    ActiveChatPageComponent,
    SideBarComponent,
    UpdateComponent,
    BannerComponent,
    SectionComponent,
    QuestionComponent,
    ContactusComponent,
    FAQComponent,
    ChatBoxComponent,
    ChatIdComponent,
    MessageComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
