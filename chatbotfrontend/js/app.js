const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
let inputEl=document.getElementById("input-text");
const sendBtn=document.getElementById("send-button");
let mainContainerEl=document.getElementById("chatbox-messages-section");


const icons = {
    isClicked: '<img src="../static/icons/chatboxcancel-icon.svg" />',
    isNotClicked: '<img src="../static/icons/chatbox-icon.svg" />'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);



inputEl.addEventListener("keydown",function(event){
    let content=inputEl.value;
    if(event.key==="Enter"){
        console.log("clicked");
        console.log(content);

        let ContainerEl=document.createElement("div");
        ContainerEl.classList.add("messages__item");
        ContainerEl.classList.add("messages__item--operator");
        ContainerEl.textContent=content;
        mainContainerEl.appendChild(ContainerEl);


        let chatbotContentEl=document.createElement("div");
        chatbotContentEl.classList.add("messages__item");
        chatbotContentEl.classList.add("messages__item--typing");

        for(let i=0;i<3;i++){
            let spanEl=document.createElement("span");
            spanEl.classList.add("messages__dot");
            chatbotContentEl.appendChild(spanEl);
        }
        mainContainerEl.appendChild(chatbotContentEl);
            let inputMessage=inputEl.value;

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "text/plain");
            
            var raw = `{\r\n    \"sender\": 1,\r\n    \"message\" : \"${inputMessage}\"\r\n}\r\n`;
            
            inputEl.value="";

            console.log(raw);
            console.log(inputMessage);
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
            fetch("https://455b-103-127-167-215.ngrok.io/webhooks/rest/webhook", requestOptions)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsondata) {
                    console.log(jsondata);
                    let {recipient_id,text}= jsondata[0];
                    
                    
                    console.log(text);
    
    
    
                    chatbotContentEl.classList.add("d-none");
    
                    let chatbotContentEl2=document.createElement("div");
                    chatbotContentEl2.classList.add("messages__item");
                    chatbotContentEl2.classList.add("messages__item--visitor");
                    chatbotContentEl2.textContent=text;
                    mainContainerEl.appendChild(chatbotContentEl2);
                })
                .catch(error => console.log('error', error));
    }
    
})


sendBtn.addEventListener("click",()=>{
    let content=inputEl.value;
    if(content!==""){
        console.log("clicked");
        console.log(content);

        let ContainerEl=document.createElement("div");
        ContainerEl.classList.add("messages__item");
        ContainerEl.classList.add("messages__item--operator");
        ContainerEl.textContent=content;
        mainContainerEl.appendChild(ContainerEl);


        let chatbotContentEl=document.createElement("div");
        chatbotContentEl.classList.add("messages__item");
        chatbotContentEl.classList.add("messages__item--typing");

        for(let i=0;i<3;i++){
            let spanEl=document.createElement("span");
            spanEl.classList.add("messages__dot");
            chatbotContentEl.appendChild(spanEl);
        }
        mainContainerEl.appendChild(chatbotContentEl);
            let inputMessage=inputEl.value;

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "text/plain");
            
            var raw = `{\r\n    \"sender\": 1,\r\n    \"message\" : \"${inputMessage}\"\r\n}\r\n`;
            
            inputEl.value="";

            console.log(raw);
            console.log(inputMessage);
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
            fetch("https://455b-103-127-167-215.ngrok.io/webhooks/rest/webhook", requestOptions)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsondata) {
                    let {recipient_id,text}= jsondata[0];
                    
                    
                    console.log(jsondata);
                    console.log(text);
    
    
    
                    chatbotContentEl.classList.add("d-none");
    
                    let chatbotContentEl2=document.createElement("div");
                    chatbotContentEl2.classList.add("messages__item");
                    chatbotContentEl2.classList.add("messages__item--visitor");
                    chatbotContentEl2.textContent=text;
                    mainContainerEl.appendChild(chatbotContentEl2);
                })
                .catch(error => console.log('error', error));
    }
    
})

