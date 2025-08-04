let voted = {}

function check_vote(name) {
  if(voted[name]) {
    console.log('Kick them out')
  } else {
    voted[name] = true
    console.log("Let them vote")
  }
}

check_vote("Tom")
check_vote("Mike")
check_vote("Mike")
console.log(voted)
