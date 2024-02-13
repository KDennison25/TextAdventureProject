const start = `You are a 4 star QB recruit out of High School, and many colleges want you to play for the next year but, you've narrowed it down to 2 choices...
click OK to continue `

const enter = `Please enter 1 or 2 for your answer`

const gameOver = `Sorry, your career is OVER`

const q1 = `The 2 teams you are down to are in you are:  
1. Alabama 
OR
2. Connecticut (UCONN) 
${enter}` // #1

const gameOver1 = `Well, you chose one of the WORST colleges in football history! This isn't basketball! 
You won the starting job Sophomore year BUT your team is so bad you throw 15 TDs and 13 INTs on the season.
You end up transferring to a DII school to finish your college career and end up working as a used Car Salesman. ${gameOver}`

const q2a = `You've chosen Alabama the best team in modern CFB history. 
You sat behind QB Jalen Milroe for your Freshman season, but with coach Saban's retirement, for your sophomore season you could:
1. Transfer to a new school 
OR
2. Stick it out with the new coach
${enter}` // #1

gameOver2a = `Sticking it out with the new coach may seem like the best thing to do, BUT this is modern day College Football, coach DeBoer brings in the hottest transfer QB on the market to start over you, you end up riding the bench for the rest of your college career wondering what could've been. ${gameOver}`

const q3a = `You end up transferring to play for Brian Kelly and LSU, where you have a solid sophomore season with 26 TDs and 7 INTs
For your Junior season, coach Kelly wants you to work on a new skill to help you improve. Do you:
1. Work on your Deep Pass Accuracy
OR 
 2. Work on your Speed & Agility  
${enter}` // #2

gameOver3a = `Working on your Deep Pass Accuracy SEEMS to work well...
until you hurt your shoulder doing so in training camp, and you lose your starting job to 6'4 Freshman Chad Morrison, who never gives you a chance to win your job back.Seems you just have bad luck... ${gameOver}`

const q4a = `Your new found speed makes you a Dual-Threat QB, and you have a SPECTACULAR Junior season, and are a finalist for the Heisman Trophy, finishing 3rd in voting, your team would suffer a loss in the revamped CFB playoff ranked #11 to Texas. You now have a very tough choice to make.
1. Return to College for Revenge and try to win the Heisman & Natty
OR
2. Declare for the NFL Draft and hope to be a mid-rounds draft pick`

gameOver4a = `As expected you weren't taken on day 1 of the draft, but what you didn't except was to slide all the way down to day 3, taken pick 198 by the Saints (Tom Brady YOU ARE NOT) While you did achieve your lifelong dream of making the NFL, you were never really given a chance, as the saints cut you and you spend the rest of your career on practice squads and in the UFL. Meanwhile, your Successor at LSU, Chad Morrison, leads them to a national championship 
${gameOver}`

const q5a = `You decide to return for your Senior season. and you're the BEST QB in the Nation. LSU wins the SEC, the National Championship, and you, the Heisman Trophy
The next step is the NFL, and the teams with the top 2 picks are interested in you, and you can almost chose which one to go to...
1. Minnesota Vikings
OR
2. New York Jets (FYI: Would be forced to trade up)
${enter}`

const gameOver5a = `Not only did you believe in the Jets, you told them to TRADE UP for you.. 
They had to give up multiple picks in order to do so Even though you were the first pick in the draft, You can't carry such a poverty franchise with no help The O-line gets you injured in 2 of your first 3 seasons, and you become a shell of your former self, and end up becoming a bust and a career backup for the Texans. Never bet on the Jets...
${gameOver}`

const winA = `The Vikings have had a rough couple of seasons now, but you come in and completely change things around. A still in his prime Justin Jefferson helps you lead the team to the playoffs in your rookie season, and sure enough, 2 years later you lift Lombardi and SuperBowl MVP. You are certainly a future Hall of Famer and have given the Vikings their first Super Bowl...
Congratulations!!! You've Won!!!`

const q2b = `You have chosen to play for your home state team Kentucky. and You patiently wait from the bench your Freshman AND Sophomore year before you can possibly win the job Junior year. In your position battle you get to chose a WR Alumni to run routes for you. Do you chose 
1. Wan'Dale Robinson
OR
2. Randall Cobb`

const gameOver2b = `Even though Cobb is a tenured NFL player, he is much older now and he isn't as fast as he used to be and your opponent, Cutter Boley, slightly defeats you in the QB battle and you finish your career at Western Kentucky and don't make the NFL
${gameOver}`

const q3b = `Wan'Dale helps you win the starting job and Kentucky has a great season, finishing 10-2 and sneaking in the CFB playoff at #10, and you even make it to the Semifinals before falling to #1 Oregon. You had a decent season, but NFL scouts are saying teams are willing to gamble on you know even though you could still develop in college. Do you listen to them?
1. NO Stay in college
OR
2. YES go pro
${enter}`

const gameOver3b = `You stay in college thinking you'd only improve your draft stock but, you don't play any better than last year, and Kentucky regressed as a team, winning only 8 games. You get drafted to the NFL as a backup in the 4th round and only start a handful of games in your career. You are still a decently paid backup and get a ring with the Seahawks, so it wasn't all bad, but what could've been. 
${gameOver}`

const WinB = `You go pro, and despite people online saying you're not ready, you get drafted #17 in the Draft to the Las Vegas Raiders and go on to have a very good career making 8 Pro Bowls and even playing in a Super Bowl. Your career went great, but who knows, maybe it could've been better? 
Congratulations!!! You Win!!`


alert(start);


let userInput = prompt(q1)


if (userInput == 1){ 

    
   userInput = prompt(q2a)

    
    if (userInput == 1){
     userInput = prompt(q3a)

   
    if (userInput == 2){
     userInput = prompt(q4a)

    
     if (userInput == 1){
        userInput = prompt(q5a)

        
        if (userInput == 1){
            alert(win)
        } else {
            alert(gameOver5a)
        }

     } else {
        alert(gameOver4a)
     }
    } else {
        alert(gameOver3a)
    }

    } else {
        alert(gameOver2a)
    }

} 
else {
    alert(gameOver1)
}

// Secondary Path written but unable to code in time