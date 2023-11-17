

const usedWNumbers = new Set();
const usedBNumbers = new Set();


function generateWRandomNumber() {
    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * 8) + 1;
    } while (usedWNumbers.has(randomNum));

    usedWNumbers.add(randomNum);

    return randomNum;
}

function generateBRandomNumber() {
    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * 8) + 1;
    } while (usedBNumbers.has(randomNum));

    usedBNumbers.add(randomNum);

    return randomNum;
}

function resetWUsedNumbers() {
    usedWNumbers.clear();
}

function resetBUsedNumbers() {
    usedBNumbers.clear();
}

var chessSet = 
{
    //White pawns
    "p-w-1":{
        "role":"pawn",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":1,
            "y":7
        }
    },
    "p-w-2":{
        "role":"pawn",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":2,
            "y":7
        }
    },
    "p-w-3":{
        "role":"pawn",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":3,
            "y":7
        }
    },
    "p-w-4":{
        "role":"pawn",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":4,
            "y":7
        }
    },
    "p-w-5":{
        "role":"pawn",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":5,
            "y":7
        }
    },
    "p-w-6":{
        "role":"pawn",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":6,
            "y":7
        }
    },
    "p-w-7":{
        "role":"pawn",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":7,
            "y":7
        }
    },
    "p-w-8":{
        "role":"pawn",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":8,
            "y":7
        }
    },
    //Black pawns
    "p-b-1":{
        "role":"pawn",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":1,
            "y":2
        }
    },
    "p-b-2":{
        "role":"pawn",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":2,
            "y":2
        }
    },
    "p-b-3":{
        "role":"pawn",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":3,
            "y":2
        }
    },
    "p-b-4":{
        "role":"pawn",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":4,
            "y":2
        }
    },
    "p-b-5":{
        "role":"pawn",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":5,
            "y":2
        }
    },
    "p-b-6":{
        "role":"pawn",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":6,
            "y":2
        }
    },
    "p-b-7":{
        "role":"pawn",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":7,
            "y":2
        }
    },
    "p-b-8":{
        "role":"pawn",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":8,
            "y":2
        }
    },
    //White rooks
    "r-w-l":{
        "role":"rook",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateWRandomNumber(),
            "y":8
        }
    },
    "r-w-r":{
        "role":"rook",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateWRandomNumber(),
            "y":8
        }
    },
    //Black rooks
    "r-b-l":{
        "role":"rook",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateBRandomNumber(),
            "y":1
        }
    },
    "r-b-r":{
        "role":"rook",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateBRandomNumber(),
            "y":1
        }
    },
    //White knights/horses
    "h-w-l":{
        "role":"horse",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateWRandomNumber(),
            "y":8
        }
    },
    "h-w-r":{
        "role":"horse",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateWRandomNumber(),
            "y":8
        }
    },
    //Black knights/horses
    "h-b-l":{
        "role":"horse",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateBRandomNumber(),
            "y":1
        }
    },
    "h-b-r":{
        "role":"horse",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateBRandomNumber(),
            "y":1
        }
    },
    //White bishops
    "b-w-l":{
        "role":"bishop",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateWRandomNumber(),
            "y":8
        }
    },
    "b-w-r":{
        "role":"bishop",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateWRandomNumber(),
            "y":8
        }
    },
    //black bishops
    "b-b-l":{
        "role":"bishop",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateBRandomNumber(),
            "y":1
        }
    },
    "b-b-r":{
        "role":"bishop",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateBRandomNumber(),
            "y":1
        }
    },
    //White queen
    "q-w-l":{
        "role":"queen",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateWRandomNumber(),
            "y":8
        }
    },
    //Black queen
    "q-b-r":{
        "role":"queen",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateBRandomNumber(),
            "y":1
        }
    },
    //White king
    "k-w":{
        "role":"king",
        "team":"white",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateWRandomNumber(),
            "y":8
        }
    },
    //Black king
    "k-b":{
        "role":"king",
        "team":"black",
        "virgin":true,
        "lastMoved":0,
        "babySteps":0,
        "position":{
            "x":generateBRandomNumber(),
            "y":1
        }
    }
};