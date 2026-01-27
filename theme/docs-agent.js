"use strict";var DocsAgent=(()=>{var f=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var E=Object.prototype.hasOwnProperty;var C=(a,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of b(t))!E.call(a,i)&&i!==e&&f(a,i,{get:()=>t[i],enumerable:!(s=S(t,i))||s.enumerable});return a};var x=a=>C(f({},"__esModule",{value:!0}),a);var k={};var p=class{constructor(t){this.baseUrl=t}getHeaders(t){let e={"Content-Type":"application/json"};return t&&(e.Authorization=`Bearer ${t}`),e}async exchangeCode(t){let e=await fetch(`${this.baseUrl}/auth/exchange`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify({code:t})});if(!e.ok){let i=await e.json().catch(()=>({error:"Exchange failed"}));throw new Error(i.error||"Exchange failed")}let s=await e.json();return{token:s.session_token,sessionId:s.session_id}}async createChat(t){let e=await fetch(`${this.baseUrl}/chats`,{method:"POST",headers:this.getHeaders(t)});if(!e.ok){if(e.status===401)throw new Error("Unauthorized");let s=await e.json().catch(()=>({error:"Failed to create chat"}));throw new Error(s.error||"Failed to create chat")}return e.json()}async getChat(t,e){let s=await fetch(`${this.baseUrl}/chats/${e}`,{headers:this.getHeaders(t)});if(!s.ok)throw s.status===401?new Error("Unauthorized"):new Error("Failed to fetch chat");return s.json()}async sendMessage(t,e,s,i,l,d){let c=await fetch(`${this.baseUrl}/chats/${e}/messages`,{method:"POST",headers:this.getHeaders(t),body:JSON.stringify({content:s})});if(!c.ok){if(c.status===401){d("Unauthorized");return}let u=await c.json().catch(()=>({error:"Failed to send message"}));d(u.error||"Failed to send message");return}let r=c.body?.getReader();if(!r){d("Streaming not supported");return}let n=new TextDecoder,g="";for(;;){let{done:u,value:w}=await r.read();if(u)break;g+=n.decode(w,{stream:!0});let v=g.split(`
`);g=v.pop()||"";for(let h of v)if(h.startsWith("event: ")){let o=h.slice(7);if(o==="done"){l();return}else if(o==="error"){d("Stream error");return}}else if(h.startsWith("data: "))try{let o=JSON.parse(h.slice(6));if(o.text)i(o.text);else if(o.error){d(o.error);return}}catch{}}l()}},m=class{constructor(t){this.config=t;this.container=null;this.isOpen=!1;this.isLoading=!1;this.isStreaming=!1;this.messages=[];this.session=null;this.chatId=null;this.needsAccessCode=!1;this.storageKey="docs-agent-session";this.api=new p(t.apiBaseUrl),this.position=t.position||"bottom-right",this.loadSession(),this.init()}loadSession(){try{let t=localStorage.getItem(this.storageKey);if(t){let e=JSON.parse(t);this.session=e.session,this.chatId=e.chatId,this.messages=e.messages||[]}}catch{}this.session?this.chatId&&this.messages.length===0&&this.fetchChatHistory():this.needsAccessCode=!0}saveSession(){this.session&&localStorage.setItem(this.storageKey,JSON.stringify({session:this.session,chatId:this.chatId,messages:this.messages}))}async fetchChatHistory(){if(!(!this.session||!this.chatId))try{let t=await this.api.getChat(this.session.token,this.chatId);t.messages&&(this.messages=t.messages.map(e=>({role:e.role,content:e.content})),this.saveSession(),this.render())}catch(t){if(t.message==="Unauthorized"){this.logout();return}this.chatId=null,this.messages=[],this.saveSession()}}logout(){this.session=null,this.chatId=null,this.messages=[],this.needsAccessCode=!0,localStorage.removeItem(this.storageKey),this.render()}init(){this.container=document.createElement("div"),this.container.id="docs-agent-widget",this.container.className=`da-widget da-${this.position}`,document.body.appendChild(this.container),this.render()}render(){this.container&&(this.container.innerHTML=this.isOpen?this.renderOpen():this.renderClosed(),this.bindEvents())}renderClosed(){return`
      <button class="da-fab" aria-label="Open support chat">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `}renderOpen(){return`
      <div class="da-panel">
        <div class="da-header">
          <span class="da-title">StartOS Support</span>
          <div class="da-header-actions">
            ${this.session?`
              <button class="da-logout-btn" title="Log out">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </button>
            `:""}
            <button class="da-close-btn" aria-label="Minimize" title="Minimize">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="4 14 10 14 10 20"></polyline>
                <polyline points="20 10 14 10 14 4"></polyline>
                <line x1="14" y1="10" x2="21" y2="3"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="da-body">
          ${this.needsAccessCode?this.renderAccessCodeForm():this.renderChat()}
        </div>
      </div>
    `}renderAccessCodeForm(){return`
      <div class="da-access-code-form">
        <div class="da-access-code-info">
          <h3>Enter Access Code</h3>
          <p>Please enter your support access code to start chatting with StartOS support.</p>
        </div>
        <form class="da-code-form">
          <input 
            type="text" 
            class="da-code-input" 
            placeholder="Access code"
            autocomplete="off"
            autocapitalize="off"
          />
          <button type="submit" class="da-code-submit">
            Continue
          </button>
        </form>
      </div>
    `}renderChat(){return`
      <div class="da-messages">${this.messages.length===0?`<div class="da-welcome">
        <p>Ask anything about StartOS</p>
      </div>`:this.messages.map(e=>this.renderMessage(e)).join("")}</div>
      <div class="da-input-area">
        <div class="da-input-row">
          <textarea 
            class="da-input" 
            placeholder="Ask a question..." 
            rows="1"
            ${this.isLoading||this.isStreaming?"disabled":""}
          ></textarea>
          <button class="da-send-btn" ${this.isLoading||this.isStreaming?"disabled":""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <div class="da-input-footer">
          ${this.messages.length>0?'<button class="da-end-chat-btn">End chat</button>':""}
        </div>
      </div>
    `}renderMessage(t){let e=t.role==="user",s=e?this.escapeHtml(t.content):this.renderMarkdown(t.content),i=this.isStreaming&&!e&&t===this.messages[this.messages.length-1]?'<span class="da-cursor"></span>':"";return`
      <div class="da-message da-message-${t.role}">
        <div class="da-message-content">${s}${i}</div>
      </div>
    `}escapeHtml(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}renderMarkdown(t){let e=this.escapeHtml(t);return e=e.replace(/```(\w*)\n([\s\S]*?)```/g,"<pre><code>$2</code></pre>"),e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/\n/g,"<br>"),e}bindEvents(){if(!this.container)return;this.container.querySelector(".da-fab")?.addEventListener("click",()=>this.toggle()),this.container.querySelector(".da-close-btn")?.addEventListener("click",()=>this.toggle()),this.container.querySelector(".da-logout-btn")?.addEventListener("click",()=>this.logout()),this.container.querySelector(".da-code-form")?.addEventListener("submit",n=>{n.preventDefault(),this.handleAccessCodeSubmit()}),this.container.querySelector(".da-code-input")?.addEventListener("keydown",n=>{n.stopPropagation()}),this.inputEl=this.container.querySelector(".da-input"),this.inputEl&&(this.inputEl.addEventListener("keydown",n=>{n.stopPropagation(),n.key==="Enter"&&!n.shiftKey&&(n.preventDefault(),this.handleSend())}),this.inputEl.addEventListener("input",()=>this.autoResizeInput())),this.container.querySelector(".da-send-btn")?.addEventListener("click",()=>this.handleSend()),this.container.querySelector(".da-end-chat-btn")?.addEventListener("click",()=>this.endChat());let r=this.container.querySelector(".da-messages");r&&r.scrollHeight-r.scrollTop-r.clientHeight<100&&(r.scrollTop=r.scrollHeight)}toggle(){this.isOpen=!this.isOpen,this.render(),this.isOpen&&this.inputEl&&this.inputEl.focus()}autoResizeInput(){this.inputEl&&(this.inputEl.style.height="40px",this.inputEl.scrollHeight>40&&(this.inputEl.style.height=Math.min(this.inputEl.scrollHeight,120)+"px"))}updateSendButton(){let t=this.container?.querySelector(".da-send-btn");t&&(t.disabled=this.isLoading||this.isStreaming)}async handleAccessCodeSubmit(){let e=this.container?.querySelector(".da-code-input")?.value.trim();if(!e)return;let s=this.container?.querySelector(".da-code-submit");s&&(s.disabled=!0,s.textContent="Verifying...");try{this.session=await this.api.exchangeCode(e),this.needsAccessCode=!1,this.saveSession(),this.render()}catch(i){s&&(s.disabled=!1,s.textContent="Continue"),this.showError(i.message||"Invalid access code")}}async handleSend(){let t=this.inputEl.value.trim();if(!(!t||this.isLoading||this.isStreaming)){if(this.inputEl.value="",this.autoResizeInput(),this.updateSendButton(),!this.session){this.needsAccessCode=!0,this.render();return}if(!this.chatId)try{let e=await this.api.createChat(this.session.token);this.chatId=e.chat_id,this.saveSession()}catch(e){if(e.message==="Unauthorized"){this.logout();return}this.showError(e.message);return}this.messages.push({role:"user",content:t}),this.saveSession(),this.render(),this.messages.push({role:"assistant",content:""}),this.isStreaming=!0,this.render();try{await this.api.sendMessage(this.session.token,this.chatId,t,e=>{let s=this.messages[this.messages.length-1];s.role==="assistant"&&(s.content+=e,this.updateLastMessage())},()=>{this.isStreaming=!1,this.saveSession(),this.render()},e=>{if(e==="Unauthorized"){this.logout();return}this.isStreaming=!1;let s=this.messages[this.messages.length-1];s.role==="assistant"&&!s.content&&(s.content="Sorry, something went wrong. Please try again."),this.saveSession(),this.render()})}catch(e){if(e.message==="Unauthorized"){this.logout();return}this.isStreaming=!1,this.showError(e.message),this.render()}}}updateLastMessage(){let t=this.container?.querySelector(".da-messages"),e=t?.querySelector(".da-message:last-child .da-message-content"),s=this.messages[this.messages.length-1];e&&s&&(e.innerHTML=this.renderMarkdown(s.content)+'<span class="da-cursor"></span>',t&&t.scrollHeight-t.scrollTop-t.clientHeight<100&&(t.scrollTop=t.scrollHeight))}endChat(){this.messages.length>0&&!confirm("End this chat and start a new one?")||(this.chatId=null,this.messages=[],this.saveSession(),this.render())}showError(t){this.container?.querySelector(".da-error")?.remove();let s=document.createElement("div");s.className="da-error",s.textContent=t;let i=this.container?.querySelector(".da-body");i?.insertBefore(s,i.firstChild),setTimeout(()=>s.remove(),5e3)}};function y(){window.DocsAgentConfig&&(window.DocsAgent=new m(window.DocsAgentConfig))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y):y();return x(k);})();
//# sourceMappingURL=docs-agent.js.map
