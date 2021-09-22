const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


let state = {}

function startGame() {
    state = {}
    showTextNode(0)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
           const button = document.createElement('button') 
           button.innerText = option.text
           button.classList.add('btn')
           button.addEventListener('click', () => selectOption(option))
           optionButtonsElement.appendChild(button)
        }
    })
 
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}
    


const textNodes = [
        {
        id: 0,
        text: 'It has been nearly 10 years since that fateful day. I was sailing the Norther Seas with my crew of loyal men when we were ambushed in broad daylight! They took everything but, worst of all they imprisoned me for crimes against the King. Now I am chained down in this strange place, locked away, awaiting my fate...  You wake up to the loud footsteps of a Guard approaching your cell. As they enter your line of sight you quickly notice this guard is not your typical visitor. Your eyes lock onto them as they place a tray of food into your cell.',
        options: [
         {
            text: 'Start',
            nextText: 1
         } 
                 ]
        },
  
        {
        id: 1,
        text: 'You attack the tray with all your might. It has been far too long since you have eaten. When you take a bite from the loaf of bread you bite down on a hard metallic like object. A KEY!!! you shout ',
        options: [
            {
                text: 'Open your cell door', 
                nextText: 2
            },
            {
                text: 'Wait until night time',
                nextText: 2
            },
                ]
        },
  
        {
        id: 2,
        text: 'You venture forward a dark and narrow hallway. At the end of the hall you see a long spiral staircase. You follow it and find a wooden door.   ',
        options: [
                {
                    text: 'Look through the key hole',
                    nextText: 3
                },
                {
                    text: 'Open the wooden door',
                    nextText: 4
                },
                {
                    text: 'Ignore the door and walk back in the other direction',
                     nextText: 5
                }
            ]
        },

        {
        id: 3,
        text: 'You see a guard inspecting the cells. With every second that passes he comes one step closer to you',
        options: [
                {
                    text: 'Stop looking',
                    nextText: 2
                },
               
            ]
        },
        {
        id: 4,
        text: 'You open the wooden door and to your surprise you see a guard. He runs towards you with his sword in hand. You fight back but it is no use. You have lost this battle. You have died!',
        options:[
                {
                    text: 'Restart',
                    nextText: -1
                }
            ]
        },
        {
        id: 5,
        text: 'You make your way back through the hallway. After passing your cell block you see a light come from the end. A fully lit torch hangs on the wall  ',
        options: [
                {
                    text: 'Take the Torch',
                    setState: {Torch: true},
                    nextText: 6
                },
                {
                    text: 'Leave the Torch',
                    nextText: 2
                }

            ]
        },
        {
        id: 6,
        text: 'The hallway has been illuminated. From the right corner of your eye you notice a small tunnel on the wall shaped like a semi-circle. You bend down to investigate and find the tunnel to have just the right amount of space for you to crawl through.',
        options: [
                {
                    text: 'Crawl in the Tunnel',
                    nextText: 7
                }
            ]
        },
        {
        id: 7,
        text: 'You end up in another cell with a creepy looking man. He looks like a walking sekelton. He turns around to face you. While wiggling his index finger he mubbles the words, WANNA TRADE? His eyes are hypnoized by your torch',
        options: [
                {
                    text: 'Trade for a jar of BLUE GOO',
                    setState: {BLUEGOO: true},
                    nextText: 8
                },
                {
                    text: 'Trade for a SLINGSHOT',
                    setState: {SLINGSHOT: true},
                    nextText: 8
                },
                {
                    text: 'Beat the man up',
                    nextText: 9
                }
            ]
        },
        {
        id: 8,
        text: 'I have never seen a half dead man be so entertained by a torch, you think to yourself. You walk out of the cell and into the darkness. After roaming the floor you hear chatter come from another room. As you head towards the room you can see the door opening. You quickly slide to the left to avoid being seen. A man dressed in a fancy red-velvet robe comes out. Grari where are you? Master is looking for you! he says in a playful yet, menacing tone. ',
        options: [
                {
                    text: 'Approach the Master',
                    nextText: 10
                },
                {
                    text: 'Enter the room',
                    nextText: 11
                },
            ]
        },
        {
            id: 9,
            text: 'After punching the man, he falls unconscious and drops a scroll. The scroll reads, The master is right, I must make my master happy. Therefore I is right. You walk outside of the cell and see a large corridor leading to a slightly opened door. As you head towards the room you can see the door opening. A man dressed in a fancy red-velvet robe comes out. Grari where are-- Ahhhhhhhh Who are you? ',
            options: [
                {
                    text: 'Beat this man up',
                    nextText: 12
                },
                {
                    text: 'Explain that you are Grari old time friend',
                    nextText: 13
                },
            ]
        },
        {
            id: 10,
            text: 'Grari where are-- Ahhhhhhhh Who are you?',
            options: [
                {
                    text: 'Beat this man up',
                    nextText: 12
                },
                {
                    text: 'Explain that you are Grari old time friend',
                    nextText: 13
                },
            ]
        },
        {
            id: 11,
            text: 'You Enter the room and lock the door behind you. When you turn around you see a mostly empty room. With a bed , a closet, and a desk. You search the bed and find nothing. Then, you check the desk and find a red-velvet robe. Lastly, you open the closet and see a weird looking symbol you have never seen before and text under it reading, WALK IN, WALK OUT. ',
            options: [
                {
                    text: 'Look around this room',
                    nextText: 16
                },
                {
                    text: 'Step inside the closet',
                    nextText: 17
                },
            ]
        },
        {
            id: 12,
            text: 'You throw the first punch and miss. The Master starts casting a spell that throws chains from underneath his robe. Suddenly you can not move. Stuck in place you realize you have lost this battle. You have died.',
            options: [
                {
                    text:'Restart',
                    nextText: -1
                }
            ]
        },
        {
            id: 13,
            text:'You explained that you are Grari friend by creating fake stories. The Master is not convicted...',
            options: [
                {
                    text: 'Show him the BLUE GOO',
                    requiredState: (currentState) => currentState.BLUEGOO,
                    nextText: 15
                },
                {
                    text: 'Continue talking to the Master',
                    nextText: 14
                },
            ]
        },
        {
            id: 14,
            text: 'The Master Grows angrier. The Master starts casting a spell that throws chains from underneath his robe. Suddenly you can not move. Stuck in place you realize you have lost this battle. You have died.',
            options: [
                {
                    text: 'Restart',
                    nextText: -1
                }
            ]
        },
        {
            id: 15,
            text: 'You show the master the BLUE GOO and his demeanor switches. He looks at you with great intensity. As he examines the jar he abruptly changes his attention to you. He first looks at your arms then your head and comes to the conclusion that you will make a good fit for his experiments. You attempt to run away but it is no use. Before you know it you are stuck in place by magic chains. You will work for me for the rest of your life, HAHA says the Master. This will be your fate',
            options: [
                {
                    text: 'GAME OVER',
                    nextText: -1
                }
            ]
        },
        {
            id: 16,
            text: 'Look around the empty room. Nothing here, you say',
            options: [
                {
                        text: 'Step inside the closet',
                        nextText: 17
                    },
                
            ]
        },
        {
            id: 17,
            text: 'Upon steping inside the closet and closing the door , you start to feel the closet shaking. Flashes of light start enetering your eye and before you know it. You hear noises outside.',
            options: [
                {
                        text: 'Open the closet',
                        nextText: 18
                    },    
            ]
        },
        {
            id: 18,
            text: 'Thank you for playing the first part of my Text Adventure Game!'
        }


        

      

    
]

startGame()