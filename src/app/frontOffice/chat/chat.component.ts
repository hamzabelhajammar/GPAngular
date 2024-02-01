
import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GroupUser, ChatUser, ChatMessage } from './chat.model';
import { groupData, chatData, chatMessagesData } from './data';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Light Box
import { Lightbox } from 'ngx-lightbox';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
import { ChatBox } from 'src/app/models/ChatBox';
import {Chat} from "../../models/Chat";
import {ChatService} from "../../services/Chat.service";
import {UserChatInfo} from "../../models/UserChatInfo";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']

})

/**
 * Chat Component
 */
export class ChatComponent implements OnInit {
  @ViewChild('searchInput') searchInput: any;

  users: User[] = [];
  chatBoxs: ChatBox[] = [];
  userChatInfo: UserChatInfo[] = []; // Assuming you have a property to store the selected username
  filteredUserChatInfo : UserChatInfo[] = [];

  userChatInfoClicked: UserChatInfo = UserChatInfo.createEmpty(); // Assuming you have a property to store the selected username

  userConnecter : User = new User;
  chatData!: ChatUser[];
  groupData!: GroupUser[];
  chatMessagesData!: ChatMessage[];
  formData!: FormGroup;
  usermessage!: string;
  isFlag: boolean = false;
  submitted = false;
  isStatus!: string;
  isProfile!: string ;
  username!: any ;
  messageee:any = null;

  @ViewChild('scrollRef') scrollRef:any;

  images: { src: string; thumb: string; caption: string }[] = [];

  constructor(private chatservice :ChatService,private userService: UserService,public formBuilder: FormBuilder, private lightbox: Lightbox) {
    for (let i = 1; i <= 24; i++) {
      const src = '../../../../assets/images/small/img-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../../assets/images/small/img-' + i + '-thumb.jpg';
      const item = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this.images.push(item);
    }
  }
  async setUserConnecter(){
    var emailUserConn = localStorage.getItem("tokenEmail");
    if (emailUserConn){
      const userConnecter =  await this.userService.getUserByEmail(emailUserConn).toPromise();
      this.userConnecter = userConnecter as User;
    }
  }
  ngOnInit(): void {
    this.listen();
    this.setUserConnecter();

    this._fetchData2();

    // Validation
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });
    // Chat Data Get Function

  }

  async setUserClicked(userChatInfo: UserChatInfo) {
    this.userChatInfoClicked = userChatInfo;
    this.isFlag = true;
    this.username = userChatInfo.user.firstname;
    const Filter = require('bad-words');
    const filter = new Filter();
    //const censoredText = filter.clean(text);
    if (userChatInfo.chatBox==null){
      this.chatMessagesData = [];
    }
    else{
      const getAllMSG = await this.chatservice.getAllMSG(userChatInfo.chatBox.id,this.userConnecter.id).toPromise();
      const cleanedMessages: ChatMessage[] = getAllMSG.map((message:any) => {
        const cleanedMessage: ChatMessage = { ...message }; // Create a copy of the original message
        if (message.message) {
          if (filter.isProfane(message.message)) {
            cleanedMessage.message = filter.clean(message.message);
          }
        }
        return cleanedMessage;
      });
      this.chatMessagesData = cleanedMessages;
    }
    const userChatShow = document.querySelector('.user-chat');
    if(userChatShow != null){
      userChatShow.classList.add('user-chat-show');
    }
  }
  ngAfterViewInit() {
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 100;
  }
  async _fetchData2(){
    var emailUserConn = localStorage.getItem("tokenEmail");
    if (emailUserConn!=null){
      const userChatInfo = await this.userService.retrieveAllUsersAndIdBox(emailUserConn).toPromise();
      this.users = userChatInfo.map((info: any) => info.user) as User[];
      this.chatBoxs = userChatInfo.map((info: any) => info.chatBox) as ChatBox[];
      this.userChatInfo = userChatInfo;
      this.filteredUserChatInfo = userChatInfo;
      this.setUserClicked(userChatInfo[0])

      this.users = this.users.filter(user => user.email !== emailUserConn);
    }
    console.log(this.users);
  }
  // Chat Data Fetch
  private _fetchData() {
    this.groupData = groupData;
    this.chatData = chatData;
    this.chatMessagesData = chatMessagesData;
  }

  onListScroll() { }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  /**
   * Save the message in chat
   */
  async messageSave() {
    const Filter = require('bad-words');
    const filter = new Filter();
    const message = this.formData.get('message')!.value;
    const chat = Chat.createEmpty();
    chat.content = message ;
    chat.chatBox = this.userChatInfoClicked.chatBox;
    const currentDate = new Date();
    chat.date = currentDate;
    chat.sender = this.userChatInfoClicked.user.id;
    chat.fromm = this.userConnecter.id;
    const chatBox = await this.chatservice.sendMessage(chat).toPromise();
    this.userChatInfoClicked.chatBox = chatBox;
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.chatMessagesData.push({
        align: 'right',
        name: 'Marcus',
        message : filter.clean(message),
        time: currentDate.getHours() + ':' + currentDate.getMinutes(),
      });
      this.onListScroll();

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null,
      });
    }
    this.submitted = true;
  }

  /***
   * OnClick User Chat show
   */
  chatUsername(name: string) {
    this.isFlag = true;
    this.username = name;
    this.usermessage = 'Hello';
    this.chatMessagesData = [];
    const currentDate = new Date();
    this.chatMessagesData.push({
      name: this.username,
      message: this.usermessage,
      time: currentDate.getHours() + ':' + currentDate.getMinutes(),
    });
    const userChatShow = document.querySelector('.user-chat');
    if(userChatShow != null){
      userChatShow.classList.add('user-chat-show');
    }
  }

  /**
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    const recentActivity = document.querySelector('.user-chat');
    if(recentActivity != null){
      recentActivity.classList.remove('user-chat-show');
    }
  }

  /**
   * Info Model toggle
   */
  onChatInfoClicked() {
    const rightBar = document.getElementById('userProfileCanvasExample');
    if(rightBar != null){
      rightBar.classList.toggle('show');
      rightBar.setAttribute('style',"visibility: visible;");
    }
  }

  /**
   * Hide the sidebar
   */
  public hide() {
    const rightBar = document.getElementById('userProfileCanvasExample');
    if(rightBar != null){
      rightBar.classList.remove('show');
      rightBar.removeAttribute('style');
    }
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.images, index, { });
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }
  //////



  async search(value: string) {
    console.log(value);

    // Filter the userChatInfo array based on the search condition
    const filteredUserChatInfo = this.userChatInfo.filter(info =>
      info.user.firstname.toLowerCase().startsWith(value.toLowerCase()) ||
      info.user.lastname.toLowerCase().startsWith(value.toLowerCase())
    );
    this.filteredUserChatInfo = filteredUserChatInfo;

    console.log('Filtered UserChatInfo:', filteredUserChatInfo);
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.messageee=payload;
    });
  }
}
