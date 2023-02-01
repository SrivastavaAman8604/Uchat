import { useState , useEffect , useRef } from "react";
import { Box, Button , Input , Container , VStack , HStack , Avatar, Heading ,Text} from '@chakra-ui/react'
import Message from './component/Message.jsx';
import { onAuthStateChanged , getAuth , GoogleAuthProvider , signInWithPopup , signOut } from 'firebase/auth'
import { app } from './firebase';
import { getFirestore , addDoc, collection, serverTimestamp ,onSnapshot , query , orderBy} from 'firebase/firestore'
// import { async } from "@firebase/util";
import { FcVideoCall , FcSms ,FcBusinessman} from "react-icons/fc";
import SideChat from "./component/SideChat.jsx";

const auth=getAuth(app);
const db=getFirestore(app);

const loginHandler=()=>{
  const googleprovider = new GoogleAuthProvider();
  signInWithPopup(auth,googleprovider)
}

const logoutHandler=()=>{
  signOut(auth);
}

function App() {
  
  const [user,setUser] = useState(false);
  const [message,setMessage] = useState("");
  const [messages,setMessages] = useState([]);

  const divForScroll = useRef(null);

  const submitHandler = async (e)=>{
    e.preventDefault();
    try {
      setMessage("");

      await addDoc(collection(db,"messages"),{
        text: message,
        uid: user.uid,
        uri: user.photoURL,
        createdAt: serverTimestamp(),
      });

      divForScroll.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(()=>{

  const q = query(collection(db,"messages"),orderBy("createdAt","asc"))

    const unsubscribe = onAuthStateChanged(auth, (data)=>{
      // console.log(data)
      setUser(data);
    })
    
    const unsubscribeForMessage = onSnapshot(q ,(snap)=>{
      setMessages(
        snap.docs.map((item)=> {
          const id = item.id;
          return {id, ...item.data()};
        })
      );
    },[]);

    return ()=>{
        unsubscribe();
        unsubscribeForMessage();
    };
  })

  return (
    <Box bg={"whatsapp.100"}>
      <HStack>Hello</HStack>
      {
        user ? (
        <>
        <HStack>
          <VStack w={"full"} h={"80vh"} padding={"25"} >
              <SideChat/>
          </VStack>
        
          //Chat Box
          
        <Container h={"100vh"} bg={'whiteAlpha.700'}>
        <VStack h="full" paddingY={"4"}>
            <HStack w={"full"} bg={"whatsapp.400"}>
              <Heading><FcBusinessman/></Heading>
              <Text>SampleName 0</Text>
            </HStack>
            
          <VStack h={"full"} w={"full"} overflowY={'auto'} css={{"&::-webkit-scrollbar":{
            display: "none",
          },}}>
            {
              messages.map((item)=>(
                <Message key={item.id} text={item.text} uri={item.uri} user={item.uid===user.uid ? "me" : "other"}/>
              ))
            }
              <div ref={divForScroll}></div>
          </VStack>
          <form onSubmit={submitHandler} style={{width:"100%"}}>
          <HStack>
              <Input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Enter your message...'/>
              <Button colorScheme={"whatsapp"} type="submit">Send</Button>
          </HStack>
          </form>
        </VStack>
        </Container>
        <VStack w={"full"} h={"100vh"} style={{paddingTop:"10%"}}>
          <Avatar size="2xl" name='Aman Srivastava' src='https://bit.ly/broken-link' />
            <HStack style={{padding:"50px"}}>
              <FcSms size={"45"} />
              <FcVideoCall size={"50"}/>
            </HStack>
            <Button onClick={logoutHandler} colorScheme={"red"}>Sign Out</Button>
        </VStack>
        </HStack>
        
        </>
        ) : ( 
        <VStack justifyContent={"center"} alignItems={"center"} h={"100vh"}>
          <Button onClick={loginHandler}>Sign In with Google</Button>
        </VStack>
        )
      }
    </Box>
  );
}

export default App;
